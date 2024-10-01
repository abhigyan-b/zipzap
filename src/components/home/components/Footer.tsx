import Image from "next/image";

import { useIsMobile } from "@zipzap/hooks/useIsMobile";

import logo from "../../../../public/logo.png";

export const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col md:flex-row justify-between mt-32 bg-green w-full py-8 p-4 gap-4">
      <div className="flex justify-center">
        <Image src={logo} alt="hero logo image" width={isMobile ? 160 : 120} />
      </div>

      <div className="flex justify-center items-center text-base text-light-green font-normal">
        © ZipZap 2024, all rights reserved
      </div>
    </div>
  );
};
