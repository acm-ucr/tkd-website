"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

export type GoogleEventProps = {
  start: {
    dateTime: Date;
  };
  end: {
    dateTime: Date;
  };
  location: string;
  description: string;
  summary: string;
};

export type EventProps = Partial<{
  start: string;
  end: string;
  location: string;
  description: string;
  title: string;
}>;

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: EventProps[];
  setCurrent: (props: EventProps) => void;
};

interface DayProps {
  date: Date;
  displayMonth: Date;
  events: EventProps[];
  setCurrent: (props: EventProps) => void;
}

const Day = ({ date, displayMonth, events, setCurrent }: DayProps) => {
  const currentMonth = displayMonth.getMonth() === date.getMonth();

  return (
    <div
      className={`${currentMonth ? "text-white" : "text-gray-400"} scrollbar-hidden h-20 overflow-y-scroll border md:h-24`}
    >
      <p className="sticky px-2 text-right">{date.getDate()}</p>

      {events?.map(({ title, start, end, location, description }, index) => {
        const startDate = new Date(start as string);

        if (
          startDate.getDate() === date.getDate() &&
          startDate.getMonth() === date.getMonth() &&
          startDate.getFullYear() === date.getFullYear()
        ) {
          return (
            <div
              className="my-1 cursor-pointer text-ellipsis bg-tkd-blue-200 p-1 text-center text-white hover:bg-opacity-100"
              key={index}
              onClick={() =>
                setCurrent({ title, start, end, location, description })
              }
            >
              {startDate.getHours() < 12
                ? (startDate.getHours() % 12) + "am"
                : (startDate.getHours() % 12) + "pm"}{" "}
              {title}
            </div>
          );
        }
      })}
    </div>
  );
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  events,
  setCurrent,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "mb-10 rounded-none border-none bg-slate-900 p-3",
        className,
      )}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month:
          "space-y-4 md:w-2/3 w-[90%] flex justify-center flex-col mx-auto",
        caption: "flex justify-center p-1 relative items-center",
        caption_label: "text-4xl md:text-6xl text-white",
        nav: "space-x-1 flex items-center",
        nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        nav_button_previous: "absolute md:left-1/8 left-[3%]",
        nav_button_next: "absolute md:right-1/8 right-[5%]",
        table: "w-full border-collapse space-y-1 table-fixed",
        head_row: "flex",
        head_cell:
          "text-muted-foreground w-full font-normal text-md md:text-3xl border text-white p-0 md:p-2",
        row: "flex w-full",
        cell: "text-center font-inika md:text-2xl text-sm min-w-[14.285714285%] overflow-auto scrollbar-hidden text-ellipsis p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-tkd-blee first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-full p-0 aria-selected:opacity-100 border",
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-tkd-red-200",
        day_today: "bg-tkd-red-200",
        day_outside: "day-outside",
        day_disabled: "text-white opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-white",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft
            className={cn("h-10 w-10 text-white", className)}
            {...props}
          />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight
            className={cn("h-10 w-10 text-white", className)}
            {...props}
          />
        ),
        Day: ({ displayMonth, date }) => (
          <Day
            date={date}
            displayMonth={displayMonth}
            events={events}
            setCurrent={setCurrent}
          />
        ),
      }}
      formatters={{
        formatWeekdayName: (day) =>
          day?.toLocaleDateString("en-US", { weekday: "short" }),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
