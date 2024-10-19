import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import VoteButton from "./VoteButton";

const DiscussionHeader = ({ data, session, onVote, onDelete }) => (
  <div className="p-4 rounded-lg border border-black flex flex-col gap-4">
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
        <h1 className="font-semibold">{data?.name}</h1>
        <span>
          {data?.createdAt
            ? formatDistanceToNow(new Date(data.createdAt))
            : "Loading..."}
        </span>
      </div>
    </div>
    <div>
      <h1 className="font-semibold text-xl">{data?.title}</h1>
      <p className="mt-4">{data?.description}</p>
    </div>
    <div className="flex justify-between">
      <div className="flex gap-4">
        <VoteButton type="upvote" count={data?.upvoteCount} onVote={onVote} />
        <VoteButton
          type="downvote"
          count={data?.downvoteCount}
          onVote={onVote}
        />
      </div>
      {session?.$id === data?.userId && (
        <div className="flex gap-4">
          <button onClick={onDelete}>
            <MdDelete />
          </button>
        </div>
      )}
    </div>
  </div>
);

export default DiscussionHeader;
