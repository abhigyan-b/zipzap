import Image from "next/image";

import logo from "../../../../public/logo.png";

export const Hero = () => (
  <div className="flex flex-col items-center justify-center gap-8">
    <Image src={logo} alt="hero logo image" width={200} />
    <div className="flex justify-center text-4xl text-light-green font-extrabold">
      Coming Soon
    </div>
  </div>
);
