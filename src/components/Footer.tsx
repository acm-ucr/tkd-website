import Image from "next/image"
import tkdicon from "/src/components/footerImages/tkd-icon.png"
import instaicon from "/src/components/footerImages/instagram-icon.png"
import discordicon from "/src/components/footerImages/discord-icon.png"
import facebookicon from "/src/components/footerImages/facebook-icon.png"
const Footer = () => {
  return ( 
  
  <footer className="bg-[#313547] w-full absolute bottom-0">
    <div className="flex justify-around items-center  h-[580px]">
      {/* left side of line */}
      {/* Socials */}
      <div className="flex font-inika text-[22px] justify-around w-[530px] ">

        {/* facebook */}
        <div className="justify-items-center relative">
            <div className="bg-white w-[100px] h-[100px] rounded-full"></div>
            <Image src={facebookicon} alt="Instagram Icon" className="w-[60px]  absolute top-[20px] left-[19px]"/>
            <p className="my-5 text-white	hover:underline">facebook</p>
        </div>

        {/* instagram */}
        <a href="https://www.instagram.com/tkdatucr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <div className="justify-items-center relative">
              <div className="bg-white w-[100px] h-[100px] rounded-full"></div>
              <Image src={instaicon} alt="Instagram Icon" className="w-[60px]  absolute top-[20px] left-[22px] "/>
              <p className="my-5 text-white	hover:underline">instagram</p>
          </div>
        </a>

        {/* discord */}
        <a href="discord.gg/ungzmJyVyY">
          <div className="justify-items-center relative">
              <div className="bg-white w-[100px] h-[100px] rounded-full"></div>
              <Image src={discordicon} alt="Instagram Icon" className="w-[60px]  absolute top-[20px] left-[20px] "/>
              <p className="my-5 text-white	hover:underline">discord</p>
          </div>
        </a>

      </div>

      {/* The line in the center */}
      <div className="bg-white w-[3px]  h-[250px] absolute"></div>

      {/* right side of the line */}
      <div className="flex justify-around items-center">

        {/* Contact Information */}
        <div className="font-inika text-[30px] text-white mr-[200px]">
          <p className="  font-[700] text-3xl mb-2">Contact Information:</p>
          <p className="  font-[700] mb-2">Address:</p>
          <p>1100 University Ave</p>
          <p>Riverside, CA 92507</p>
          <p>United States</p>
          <p className="  font-[700] my-2">Contact Email:</p>
          <p>ucrtaekwondo@gmail.com</p>
        </div>

        {/* tkd image icon */}
        <Image src={tkdicon} alt="Taekwondo Icon" className="rounded-full w-[280px] h-[280px] bottom-7 right-7 absolute" />
      </div>
    </footer>
  );
  return <div>Footer</div>;
};

export default Footer;
