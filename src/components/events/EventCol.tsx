type eventProps = {
  event: string;
  description: string;
};

const EventCol: React.FC<eventProps> = ({ event, description }) => {
  return (
    <div className="justify-items-center space-y-5 md:w-1/4 lg:w-1/6">
      <div className="w-full border-2 border-tkd-red-200 bg-tkd-red-100 text-center text-3xl text-white">
        {event}
      </div>
      <div className="">{description}</div>
    </div>
  );
};

export default EventCol;
