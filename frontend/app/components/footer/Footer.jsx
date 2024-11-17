

// Hardcoded values

import Image from "next/image";
import icons from "../../../public/Social.svg";
import footerImg from "../../../public/footerlogo.svg";

const Footer = () => {
  return (
    <section className="bg-cover bg-center bg-footerColor">
      <div className="text-center">
        <h1 className="text-contactColor pt-10 font-primary text-4xl font-bold max-sm:text-[20px]">
        Wat &apos; y Learning Hub. We're here
        </h1>
        <p className="text-white font-secondary text-xs text-opacity-80 pt-7">
          4C/1/1, Ambai Road, Kulavanigarpuram, Melapalayam Post, Tirunelveli -
          627005. Mobile &#45; 9843875256
        </p>
        <button className="text-white font-secondary text-xs bg-black px-2 py-2 box-border pt-5">
          👋 Contact
        </button>

        <div className="flex justify-around items-center mt-5">
          <Image src={footerImg} alt="image" width={81} height={80} />
          <p className="text-contactColor font-secondary text-xs ml-10 max-sm:ml-0">
            © 2024 Wat &apos; y Learning Hub. All Rights Reserved.
          </p>
          <div>
            <Image src={icons} alt="icons" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
