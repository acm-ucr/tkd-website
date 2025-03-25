import MemberCard from "@/components/board/MemberCard";
import { members } from "@/data/Board";

const Members = () => {
  return (
    <div className="flex flex-wrap justify-center gap-20 px-8 py-[8%] max-sm:px-5">
      {members.map((member, id) => (
        <MemberCard
          key={id}
          url={member.url}
          position={member.position}
          name={member.name}
        />
      ))}
    </div>
  );
};

export default Members;
