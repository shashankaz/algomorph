import { BiUpvote, BiDownvote } from "react-icons/bi";

const VoteButton = ({ type, count, onVote }) => (
  <button onClick={() => onVote(type)} className="flex items-center gap-2">
    {type === "upvote" ? <BiUpvote /> : <BiDownvote />}
    <span>{count || 0}</span>
  </button>
);

export default VoteButton;
