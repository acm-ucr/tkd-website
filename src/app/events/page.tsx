"use client";

import { Calendar } from "@/components/events/Calendar";
import { EventProps, GoogleEventProps } from "@/types/calendar";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/events/dialog";
import { Element } from "react-scroll";
import Landing from "@/components/events/Landing";

const Events = () => {
  const [current, setCurrent] = useState<EventProps>({});

  const { isPending, error, data } = useQuery<void, void, EventProps[]>({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response =
        await fetch(`https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &singleEvents=true&orderBy=startTime&timeMin=${new Date(
            new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
          ).toISOString()}&timeMax=${new Date(
            new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
          ).toISOString()}`).then((res) => res.json());

      const events = response.items.map(
        ({ start, end, location, description, summary }: GoogleEventProps) => ({
          start: start.dateTime,
          end: end.dateTime,
          location,
          description,
          title: summary,
        }),
      );

      return events;
    },
  });

  return (
    <>
      <Landing events={data?.slice(-2) || []} />
      {
        <Dialog
          open={Object.keys(current).length > 0}
          onOpenChange={() => setCurrent({})}
        >
          <DialogContent className="bg-tkd-black">
            <DialogHeader>
              <DialogTitle className="mb-[5%]">
                <p className="text-2xl uppercase text-white">{current.title}</p>
                <div className="mb-[5%] h-[3px] w-full bg-white" />
                <div className="flex flex-row gap-[5%] text-white">
                  {current.location && (
                    <div className="flex w-fit items-center rounded-3xl bg-tkd-red-100 px-[4%] py-[1%] text-base">
                      {current.location}
                    </div>
                  )}
                  <div className="flex w-fit items-center rounded-3xl bg-tkd-blue-200 px-[4%] py-[2%] text-base text-white">
                    {new Date(current.start as string).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      },
                    )}{" "}
                    to{" "}
                    {new Date(current.end as string).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      },
                    )}
                  </div>
                </div>
              </DialogTitle>
              {current.description && (
                <DialogDescription className="rounded-lg bg-white px-[4%] py-[2%]">
                  {current.description}
                </DialogDescription>
              )}
            </DialogHeader>
          </DialogContent>
        </Dialog>
      }
      <Element name="calendar">
        <Calendar
          mode="single"
          selected={new Date()}
          className="w-full py-24"
          events={data || []}
          setCurrent={setCurrent}
        />
      </Element>
    </>
  );
};

export default Events;
