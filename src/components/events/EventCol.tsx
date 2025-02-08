type eventProps = {
  event: string;
  description: string;
  time: string;
};

const EventCol: React.FC<eventProps> = ({ event, description, time }) => {
  return (
    <div className="space-y-6 md:w-1/4 lg:w-1/6">
      <div className="w-full border-2 border-tkd-red-200 bg-tkd-red-100 py-2 text-center text-3xl text-white">
        {event}
      </div>
      <div className="justify-items-end pr-5 text-xl">
        <p>{description}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default EventCol;
