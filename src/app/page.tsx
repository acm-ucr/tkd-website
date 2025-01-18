import SparringGear from "@/components/home/SparringGear";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <SparringGear
        Title="Need Sparring Gear?"
        buttonTxt="Purchase Gear"
        link="_blank"
      />
    </div>
  );
};

export default Home;
