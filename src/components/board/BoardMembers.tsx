import { Member } from "@/components/board/BoardMemberCard";
import BoardMemberCard from "@/components/board/BoardMemberCard";

// Implementation guide for using BoardMembers component:

// 1) Import the BoardMembers component into your target file alongside with { BoardData }
// 2) Use the component and pass in the BoardData as a prop <BoardMembers members={BoardData} />

interface BoardMembersProps {
  members: Member[];
}

const BoardMembers = ({ members }: BoardMembersProps) => {
  return (
    <div className="flex h-screen w-screen flex-wrap justify-center gap-20 p-10">
      {members.map((member) => (
        <BoardMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default BoardMembers;
