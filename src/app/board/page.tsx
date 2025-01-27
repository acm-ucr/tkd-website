import BoardMembers from "@/components/board/BoardMembers";
import { BoardData } from "@/data/BoardData";

const Board = () => {
  return (
    <div className="bg-tkd-black">
      <BoardMembers members={BoardData} />
    </div>
  );
};

export default Board;
