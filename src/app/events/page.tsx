"use client";
import Landing from "@/components/events/Landing";
import Calendar from "@/components/events/Calendar";
import { Element } from "react-scroll";

const Events = () => {
  return (
    <>
      <Landing />
      <Element name="calendar">
        <Calendar />
      </Element>
    </>
  );
};

export default Events;
