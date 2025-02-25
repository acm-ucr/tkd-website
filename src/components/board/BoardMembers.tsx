import BoardMemberCard from "@/components/board/BoardMemberCard";
import { members } from "@/data/BoardData";

// Implementation guide for using BoardMembers component:

// 1) Import the BoardMembers component into your target file alongside with { BoardData }
// 2) Use the component and pass in the BoardData as a prop <BoardMembers members={BoardData} />

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
