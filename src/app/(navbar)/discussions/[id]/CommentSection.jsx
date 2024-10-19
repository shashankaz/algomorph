import Comment from "./Comment";

const CommentSection = ({
  comments,
  comment,
  setComment,
  onCommentSubmit,
  onDeleteComment,
  session,
}) => (
  <div className="p-4 rounded-lg border border-black flex flex-col gap-4 mt-8">
    <h1>Comments ({comments.length})</h1>
    <div>
      <h1>Add a comment</h1>
      <form onSubmit={onCommentSubmit} className="mt-4">
        <textarea
          className="w-full p-2 border border-black rounded-lg resize-none"
          placeholder="Write your comment here..."
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black hover:bg-black/80 text-white px-4 py-2 rounded-lg mt-2"
        >
          Submit
        </button>
      </form>
    </div>
    {comments.map((comment) => (
      <Comment
        key={comment.id}
        comment={comment}
        onDelete={onDeleteComment}
        session={session}
      />
    ))}
  </div>
);

export default CommentSection;
