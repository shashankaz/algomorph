"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { account, databases } from "@/app/appwrite";
import ProtectedRoute from "@/components/ProtectedRoute";
import DiscussionHeader from "./DiscussionHeader";
import CommentSection from "./CommentSection";

const Discussions = ({ params }) => {
  const [data, setData] = useState(null);
  const [img, setImg] = useState("");
  const [session, setSession] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [loadingDiscussion, setLoadingDiscussion] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchDiscussion();
    fetchComments();
    fetchUser();
  }, [params.id]);

  const fetchDiscussion = async () => {
    setLoadingDiscussion(true);
    try {
      const res = await fetch(`/api/discussion/${params.id}`);
      if (!res.ok) throw new Error("Failed to fetch discussion");
      const result = await res.json();
      setData(result.data);

      const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_2
      );

      const image = data.documents
        .reverse()
        .find((doc) => doc.userId === result.data.userId);

      if (image) {
        const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${process.env.NEXT_PUBLIC_BUCKET_ID}/files/${image.imgId}/view?project=${process.env.NEXT_PUBLIC_PROJECT_ID}`;
        setImg(imageUrl);
      } else {
        setImg("/user.png");
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoadingDiscussion(false);
    }
  };

  const fetchComments = async () => {
    setLoadingComments(true);
    try {
      const res = await fetch(`/api/comment/${params.id}`);
      if (!res.ok) throw new Error("Failed to fetch comments");
      const result = await res.json();
      const filteredComments = result.data
        .filter((comment) => comment.discussionId === params.id)
        .reverse();

      const images = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_2
      );

      const updatedComments = filteredComments.map((comment) => {
        const image = images.documents
          .reverse()
          .find((doc) => doc.userId === comment.userId);

        return {
          ...comment,
          img: image
            ? `https://cloud.appwrite.io/v1/storage/buckets/${process.env.NEXT_PUBLIC_BUCKET_ID}/files/${image.imgId}/view?project=${process.env.NEXT_PUBLIC_PROJECT_ID}`
            : "/user.png",
        };
      });
      setComments(updatedComments);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoadingComments(false);
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

  const handleDeleteComment = async (commentId) => {
    try {
      const res = await fetch(`/api/comment/${commentId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete comment");
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <ProtectedRoute>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 pt-24 pb-10">
        {loadingDiscussion ? (
          <div className="flex justify-center items-center mt-20">
            <h1 className="text-xl">Loading discussion...</h1>
          </div>
        ) : (
          <>
            <DiscussionHeader
              data={data}
              img={img}
              session={session}
              onVote={handleVote}
              onDelete={handleDelete}
            />
            {loadingComments ? (
              <div className="flex justify-center items-center mt-10">
                <h1 className="text-lg">Loading comments...</h1>
              </div>
            ) : (
              <CommentSection
                comments={comments}
                comment={comment}
                setComment={setComment}
                onCommentSubmit={handleComment}
                onDeleteComment={handleDeleteComment}
                session={session}
              />
            )}
          </>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default Discussions;
