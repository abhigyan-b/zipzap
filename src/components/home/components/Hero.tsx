import Image from "next/image";

import { useIsMobile } from "@zipzap/hooks/useIsMobile";

import logo from "../../../../public/logo.png";
import card1 from "../../../../public/card1.png";
import card2 from "../../../../public/card2.png";
import card3 from "../../../../public/card3.png";

export const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center justify-center gap-8 md:gap-12 px-8 md:px-20 w-full text-center h-screen">
      <Image src={logo} alt="hero logo image" width={500} />
      <div className="flex justify-center text-2xl md:text-4xl text-light-green font-semibold md:font-bold">
        Connecting people through games
      </div>
      <div className="flex justify-center text-base text-white font-normal">
        Discover and play your next favorite game all in one place. No need to
        download games anymore!
      </div>
      <div className="flex z-1 items-center justify-center px-20">
        <Image
          src={card1}
          alt="hero card image"
          width={isMobile ? 120 : 200}
          className="-mr-10"
        />
        <Image
          src={card2}
          alt="hero card image"
          width={isMobile ? 120 : 200}
          className="z-10"
        />
        <Image
          src={card3}
          alt="hero card image"
          width={isMobile ? 120 : 200}
          className="-ml-6"
        />
      </div>
    </div>
  );
};
