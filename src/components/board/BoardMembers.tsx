import BoardMemberCard from "@/components/board/BoardMemberCard";
import { members } from "@/data/BoardData";

const BoardMembers = () => {
  return (
    <div
      id="board"
      className="flex flex-wrap justify-center gap-20 px-8 py-[8%] max-sm:px-5"
    >
      {members.map((member, id) => (
        <BoardMemberCard key={id} member={member} />
      ))}
    </div>
  );
};

export default BoardMembers;
