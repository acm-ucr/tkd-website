import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/404page-background.webp')" }}
    >
      <div className="absolute left-[50%] top-[50%] z-0 flex h-[50%] w-[55%] translate-x-[-50%] translate-y-[-50%] items-center justify-center bg-tkd-blue-100">
        <div className="absolute -top-[8%] right-[4%] h-[100%] w-[100%] border-2 border-white bg-transparent">
          <p className="absolute left-[50%] top-[-15%] translate-x-[-50%] translate-y-[5%] font-caveat-brush text-9xl text-white">
            404
          </p>
        </div>
        <p className="translate-y-[-10%] font-inika text-7xl text-white">
          PAGE NOT FOUND
        </p>
      </div>
      <div className="absolute left-[50%] top-[78%] h-[10%] w-[17%] translate-x-[-50%]">
        <Button
          txt="Back To Home"
          link="/"
          borderColor="red"
          bgColor="red"
          size="w-[100%] h-[100%]"
        />
      </div>
    </div>
  );
};

export default NotFound;
