"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/app/appwrite";
import ProtectedRoute from "@/components/ProtectedRoute";
import DiscussionHeader from "./DiscussionHeader";
import CommentSection from "./CommentSection";

const Discussions = ({ params }) => {
  const [data, setData] = useState(null);
  const [session, setSession] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchDiscussion();
    fetchComments();
    fetchUser();
  }, [params.id]);

  const fetchDiscussion = async () => {
    try {
      const res = await fetch(`/api/discussion/${params.id}`);
      if (!res.ok) throw new Error("Failed to fetch discussion");
      const result = await res.json();
      setData(result.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comment/${params.id}`);
      if (!res.ok) throw new Error("Failed to fetch comments");
      const result = await res.json();
      const filteredComments = result.data
        .filter((comment) => comment.discussionId === params.id)
        .reverse();
      setComments(filteredComments);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchUser = async () => {
    try {
      const user = await account.get();
      setSession(user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateDiscussionData = async () => {
    const res = await fetch(`/api/discussion/${params.id}`);
    const result = await res.json();
    setData(result.data);
  };

  const handleVote = async (type) => {
    try {
      const res = await fetch(`/api/discussion/${params.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ discussionId: params.id, type }),
      });

      if (!res.ok) throw new Error("Failed to submit vote");
      await updateDiscussionData();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/discussion/${params.id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete discussion");
      router.push("/discussions");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/comment/${params.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: session.$id,
          name: session.name,
          title: "Comment",
          body: comment,
          discussionId: params.id,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit comment");
      setComment("");
      await fetchComments();
    } catch (error) {
      console.error(error.message);
    }
  };

  // const handleDeleteComment = async (commentId) => {
  //   try {
  //     const res = await fetch(`/api/comment/${commentId}`, {
  //       method: "DELETE",
  //     });
  //     if (!res.ok) throw new Error("Failed to delete comment");
  //     setComments((prevComments) =>
  //       prevComments.filter((comment) => comment.id !== commentId)
  //     );
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  return (
    <ProtectedRoute>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 pt-24 pb-10">
        <DiscussionHeader
          data={data}
          session={session}
          onVote={handleVote}
          onDelete={handleDelete}
        />
        <CommentSection
          comments={comments}
          comment={comment}
          setComment={setComment}
          onCommentSubmit={handleComment}
          // onDeleteComment={handleDeleteComment}
          session={session}
        />
      </div>
    </ProtectedRoute>
  );
};

export default Discussions;
