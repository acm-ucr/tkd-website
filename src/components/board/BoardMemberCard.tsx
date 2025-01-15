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

const BoardMemberCard = ({ member }: BoardMemberCardProps) => {
  return (
    <div key={member.id} className="relative">
      <div className="absolute bottom-4 right-4 z-[2] h-72 w-60 border-[1px] border-white"></div>
      <div className="relative z-[1] h-72 w-60">
        <Image
          src={member.url}
          alt={member.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute -bottom-5 left-10 z-[3] h-fit w-fit rounded-md bg-tkd-blue-100 px-5 text-center font-inika text-lg">
        <p>{member.name}</p>
        <p>{member.position}</p>
      </div>
    </div>
  );
};

export default BoardMemberCard;
