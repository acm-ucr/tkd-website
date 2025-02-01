import BoardMembers from "@/components/board/BoardMembers";
import { BoardData } from "@/data/BoardData";
import Landing from "../../components/board/Landing";

const Board = () => {
  return (
    <div className="bg-tkd-black">
      <Landing />
      <BoardMembers members={BoardData} />
    </div>
  );
};

export default Board;
