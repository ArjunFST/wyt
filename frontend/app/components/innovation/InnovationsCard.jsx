
// without map method

import innova from "../../../public/framepaper1.svg";
import card from "../../assets/missioncard.svg";
import card2 from "../../assets/card2.svg";
import Image from "next/image";

const InnovationsCard = () => {
  return (
    <section className="bg-bgColor h-auto border-b-2 border-white border-opacity-10">
      <div
        style={{ backgroundImage: `url(${innova.src})` }}
        className="bg-cover bg-center flex flex-col items-center py-12 px-6 lg:px-12 xl:px-24"
      >
        <h1 className="font-tertiary font-bold text-2xl md:text-3xl lg:text-4xl max-sm:text-[20px] text-center tracking-wide text-innovaColor mb-4 sm:text-xs">
          Inspiring Future Innovators
        </h1>
        <p className="font-secondary text-lg md:text-xl lg:text-xl text-center max-w-4xl max-sm:text-[15px] tracking-wide text-innovaColor mb-10">
          Through transformative education and a commitment to growth, we
          inspire individuals to innovate, lead, and create meaningful change.
        </p>

        <div className="flex justify-around gap-20 max-sm:flex-col">
          {/* 1st Card section */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-xl">
            {/* Background Image */}
            <Image src={card} alt="Background" className="rounded-lg w-full" />

            {/* Overlayed Text */}
            <div className="absolute inset-0 flex flex-col justify-around items-start text-left p-6 md:p-8 text-white bg-opacity-50 rounded-lg">
              <h2 className="font-primary font-bold text-2xl md:text-[12px] md:mb-0 lg:text-4xl max-sm:text-[15px] mb-4">
                Our Mission
              </h2>
              <p className="text-base lg:text-xl md:text-[12px] max-sm:text-[12px] font-secondary">
                At Wat &apos; y Learning Hub, we empower individuals through
                transformative software education. Our hands-on training in
                programming, software development, and soft skills prepares
                students not just for jobs but for lifelong innovation and
                leadership.
              </p>
            </div>
          </div>

          {/* 2nd Card section */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-xl">
            {/* Background Image */}
            <Image src={card2} alt="Background" className="rounded-lg w-full" />

            {/* Overlayed Text */}
            <div className="absolute inset-0 flex flex-col justify-around items-start text-left p-6 md:p-8 text-white bg-opacity-50 rounded-lg">
              <h2 className="font-primary font-bold text-2xl md:text-[12px] md:mb-0 lg:text-4xl max-sm:text-[15px] relative bottom-4 md:bottom-1">
                Our Motto
              </h2>
              <p className="text-base lg:text-xl md:text-[12px] max-sm:text-[12px] font-secondary relative 2xl:bottom-10 xl:bottom-10 lg:bottom-0 md:bottom-0 sm-middle:bottom-5">
                Just for empowerment, not only for employment. &apos; We inspire
                learners to pursue growth beyond traditional career paths,
                fostering a mindset driven by impact, change, and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationsCard;

