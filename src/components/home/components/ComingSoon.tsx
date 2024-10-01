import Image from "next/image";

import { useIsMobile } from "@zipzap/hooks/useIsMobile";

import cs1 from "../../../../public/cs1.png";
import cs2 from "../../../../public/cs2.png";
import cs3 from "../../../../public/cs3.png";
import cs4 from "../../../../public/cs4.png";

export const ComingSoon = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center justify-center gap-8 md:gap-12 relative w-full">
      <div className="flex justify-center text-4xl md:text-8xl text-light-green font-bold">
        Coming Soon
      </div>
      {/* <div className="flex justify-center text-base text-white font-normal">
      on your
    </div> */}

      <div className="flex flex-col items-center justify-center gap-4 justify-center text-lg md:text-xl text-light-green font-normal">
        Join 50+ beta testers
        <Link href="https://forms.gle/zMyNUGuY9a4buhZU9">
          <button className="py-3 md:py-4 px-6 md:px-10 bg-dark-green text-white rounded-2xl font-bold">
            Get early access
          </button>
        </Link>
      </div>

      <Image
        src={cs1}
        alt="jewel 1"
        width={isMobile ? 40 : 100}
        className="absolute"
        style={{ top: "-80px", left: isMobile ? "40px" : "400px" }}
      />

      <Image
        src={cs2}
        alt="jewel 2"
        width={isMobile ? 40 : 100}
        className="absolute"
        style={{ top: "-60px", right: isMobile ? "40px" : "240px" }}
      />
      <Image
        src={cs3}
        alt="jewel 3"
        width={isMobile ? 40 : 100}
        className="absolute"
        style={{
          bottom: isMobile ? "10px" : "0px",
          left: isMobile ? "30px" : "320px",
        }}
      />
      <Image
        src={cs4}
        alt="jewel 4"
        width={isMobile ? 40 : 100}
        className="absolute"
        style={{ bottom: "0px", right: isMobile ? "20px" : "400px" }}
      />
    </div>
  );
};
