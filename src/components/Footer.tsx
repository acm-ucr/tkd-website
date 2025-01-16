import Image from "next/image";
import tkdicon from "/src/components/footerImages/tkd-icon.png";
import instaicon from "/src/components/footerImages/instagram-icon.png";
import discordicon from "/src/components/footerImages/discord-icon.png";
import facebookicon from "/src/components/footerImages/facebook-icon.png";
const Footer = () => {
  return (
    <footer className="absolute bottom-0 h-auto w-full bg-tkd-blue-300">
      <div className="flex items-center justify-around py-[6.5%]">
        {/* left side of line */}
        {/* Socials */}
        <div className="flex w-[530px] justify-around font-inika text-[22px]">
          {/* facebook */}
          <div className="relative justify-items-center">
            <div className="h-[100px] w-[100px] rounded-full bg-white"></div>
            <Image
              src={facebookicon}
              alt="Instagram Icon"
              className="absolute left-[19px] top-[20px] w-[60px]"
            />
            <p className="my-5 text-white hover:underline">facebook</p>
          </div>

          {/* instagram */}
          <a href="https://www.instagram.com/tkdatucr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <div className="relative justify-items-center">
              <div className="h-[100px] w-[100px] rounded-full bg-white"></div>
              <Image
                src={instaicon}
                alt="Instagram Icon"
                className="absolute left-[22px] top-[20px] w-[60px]"
              />
              <p className="my-5 text-white hover:underline">instagram</p>
            </div>
            <p className="my-[20%] text-white hover:underline">facebook</p>
          </Link>

          {/* discord */}
          <a href="discord.gg/ungzmJyVyY">
            <div className="relative justify-items-center">
              <div className="h-[100px] w-[100px] rounded-full bg-white"></div>
              <Image
                src={discordicon}
                alt="Instagram Icon"
                className="absolute left-[20px] top-[20px] w-[60px]"
              />
              <p className="my-5 text-white hover:underline">discord</p>
            </div>
            <p className="my-[20%] text-white hover:underline">instagram</p>
          </Link>

          {/* Discord */}
          <Link
            href=""
            className="flex h-[18%] w-[18%] flex-col items-center justify-items-center"
          >
            <div className="relative flex items-center justify-center rounded-full bg-white p-[45%]">
              <SiDiscord className="absolute h-[54%] w-auto text-tkd-blue-300" />
            </div>
            <p className="my-[20%] text-white hover:underline">discord</p>
          </Link>
        </div>

        {/* The line in the center */}
        <div className="absolute h-[250px] w-[3px] bg-white"></div>

        {/* right side of the line */}
        <div className="flex items-center justify-around">
          {/* Contact Information */}
          <div className="mr-[200px] font-inika text-[30px] text-white">
            <p className="mb-2 text-3xl font-[700]">Contact Information:</p>
            <p className="mb-2 font-[700]">Address:</p>
            <p>1100 University Ave</p>
            <p>Riverside, CA 92507</p>
            <p>United States</p>
            <p className="my-2 font-[700]">Contact Email:</p>
            <p>ucrtaekwondo@gmail.com</p>
          </div>

          {/* tkd image icon */}
          <Image
            src={tkdicon}
            alt="Taekwondo Icon"
            className="absolute bottom-7 right-7 h-[280px] w-[280px] rounded-full"
          />
        </div>
      </div>
    </footer>
  );
  return <div>Footer</div>;
};

export default Footer;
