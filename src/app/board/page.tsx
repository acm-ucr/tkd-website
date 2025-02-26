import BoardMembers from "@/components/board/BoardMembers";
import Landing from "../../components/board/Landing";

const Board = () => {
  return (
    <div className="bg-tkd-black">
      <Landing />
      <BoardMembers />
    </div>
  );
};

export default Board;
