"use client";

import Members from "@/components/board/Members";
import Landing from "../../components/board/Landing";
import { Element } from "react-scroll";

const Board = () => {
  return (
    <div className="bg-tkd-black">
      <Landing />
      <Element name="members">
        <Members />
      </Element>
    </div>
  );
};

export default Board;
