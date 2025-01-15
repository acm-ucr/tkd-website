import { Member } from "@/components/board/BoardMemberCard";
import BoardMemberCard from "@/components/board/BoardMemberCard";

// Implementation guide for using BoardMembers component:

// 1) Import the BoardMembers component into your target file alongside with { BoardData }
// 2) Use the component and pass in the BoardData as a prop <BoardMembers members={BoardData} />

const BoardMembers = ({ members }: { members: Member[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-20">
      {members.map((member) => (
        <BoardMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default BoardMembers;
