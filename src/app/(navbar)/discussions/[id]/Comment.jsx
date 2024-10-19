import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { MdDelete } from "react-icons/md";

const Comment = ({ comment, onDelete, session }) => (
  <div className="p-4 rounded-lg border border-black">
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Image
          src="/user.png"
          alt="avatar"
          height={56}
          width={56}
          className="h-14 w-14 rounded-full"
          draggable="false"
        />
        <div>
          <h1 className="font-semibold">{comment.name}</h1>
          <p>
            {comment?.createdAt
              ? formatDistanceToNow(new Date(comment.createdAt))
              : "Loading..."}
          </p>
        </div>
      </div>
      {/* {session?.$id === comment.userId && (
        <button onClick={() => onDelete(comment.id)}>
          <MdDelete />
        </button>
      )} */}
    </div>
    <p className="mt-4">{comment.body}</p>
  </div>
);

export default Comment;
