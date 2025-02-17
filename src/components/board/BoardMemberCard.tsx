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
      <div className="absolute bottom-4 right-4 z-[2] h-96 w-72 border-[1px] border-white max-md:h-72 max-md:w-56 max-sm:h-56 max-sm:w-44"></div>
      <div className="relative z-[1] h-96 w-72 max-md:h-72 max-md:w-56 max-sm:h-56 max-sm:w-44">
        <Image
          src={member.url}
          alt={member.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute -bottom-5 left-8 z-[3] h-fit w-56 overflow-hidden text-wrap rounded-md bg-tkd-blue-100 px-5 py-1 text-center font-inika max-md:left-4 max-md:w-44 max-sm:left-2 max-sm:w-36">
        <p className="text-xl max-sm:text-base">{member.name}</p>
        <p className="text-base max-sm:text-sm">{member.position}</p>
      </div>
    </div>
  );
};

export default BoardMemberCard;
