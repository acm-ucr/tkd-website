import Image from "next/image";
export interface Member {
  url: string;
  position: string;
  name: string;
  id: number;
}
interface BoardMemberCardProps {
  member: Member;
}

// height was 72 width was 60

const BoardMemberCard = ({ member }: BoardMemberCardProps) => {
  return (
    <div key={member.id} className="relative">
      <div className="absolute bottom-4 right-4 z-[2] h-96 w-72 border-[1px] border-white"></div>
      <div className="relative z-[1] h-96 w-72">
        <Image
          src={member.url}
          alt={member.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute -bottom-5 left-8 z-[3] h-fit w-56 overflow-hidden text-wrap rounded-md bg-tkd-blue-100 px-5 py-1 text-center font-inika">
        <p className="text-xl">{member.name}</p>
        <p className="text-base">{member.position}</p>
      </div>
    </div>
  );
};

export default BoardMemberCard;
