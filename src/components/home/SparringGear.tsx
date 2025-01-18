import Button from "@/components/Button";

type sparringGearProps = {
  Title: string;
  buttonTxt: string;
  link: string;
};

const SparringGear: React.FC<sparringGearProps> = ({
  Title,
  buttonTxt,
  link,
}) => {
  return (
    <div className="md:5xl justify-items-center space-y-24 text-6xl font-bold text-white">
      <div>{Title}</div>
      <div className="">
        <Button
          txt={buttonTxt}
          link={link}
          bgColor="red"
          borderColor="red"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default SparringGear;
