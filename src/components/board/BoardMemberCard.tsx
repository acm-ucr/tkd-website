import Image from "next/image";
import Nick from "/public/Board/nick-nguyen.webp";
import Leana from "/public/Board/leanna-riberal.webp";
import Eddie from "/public/Board/eddie-park.webp";
import Ashley from "/public/Board/ashley-chan.webp";
import Aaron from "/public/Board/aaron-choi.webp";
import Liam from "/public/Board/liam-blanchard.webp";
import Santiago from "/public/Board/santiago-trejo.webp";
import Chaele from "/public/Board/chaele-kim.webp";

const BoardMemberCard = () => {
  const boardMembers = [
    {
      url: Nick,
      position: "President",
      name: "Nick Nguyen",
      id: 1,
    },
    {
      url: Leana,
      position: "Vice President",
      name: "Leana Riberal",
      id: 2,
    },
    {
      url: Eddie,
      position: "Treasurer",
      name: "Eddie Park",
      id: 3,
    },
    {
      url: Ashley,
      position: "Secretary",
      name: "Ashley Chan",
      id: 4,
    },
    {
      url: Aaron,
      position: "Social Chair/Instructor",
      name: "Aaron Choi",
      id: 5,
    },
    {
      url: Liam,
      position: "Coach/Instructor",
      name: "Liam Blanchard",
      id: 6,
    },
    {
      url: Santiago,
      position: "Coach/Instructor",
      name: "Santiago Trejo",
      id: 7,
    },
    {
      url: Chaele,
      position: "Coach/Instructor",
      name: "Chaele Kim",
      id: 8,
    },
  ];

  const renderBoard = boardMembers.map((member) => (
    <div key={member.id}>
      <div className="border-1 relative z-[1] h-72 w-60 border-2 border-white">
        <Image src={member.url} fill objectFit="cover" className="m-3" />
      </div>
      <div className="relative bottom-6 left-14 z-[2] w-fit rounded-md bg-tkd-blue-100 px-5 text-center font-inika">
        <p>{member.name}</p>
        <p>{member.position}</p>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-1">
      {renderBoard}
    </div>
  );
};

export default BoardMemberCard;
