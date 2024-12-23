import Image, { StaticImageData } from "next/image";

import { useIsMobile } from "@zipzap/hooks/useIsMobile";

import { EXPECTATION } from "./constants";

const Description = ({
  className,
  expectation: {
    title,
    description,
    image,
    borderColor,
    textColor,
    imageBgColor,
  },
  descriptionClassName,
}: {
  className?: string;
  expectation: {
    title: string;
    description: string;
    image: StaticImageData;
    borderColor: string;
    textColor: string;
    imageBgColor: string;
  };
  descriptionClassName?: string;
}): JSX.Element => {
  const isMobile = useIsMobile();

  return (
    <div className={`flex ${className}`}>
      <div className="flex-1">
        <div
          className={`flex flex-col p-4 md:p-10 gap-8 border-2 border-solid ${borderColor} ${textColor} ${descriptionClassName}`}
        >
          <div className="text-2xl md:text-4xl">{title}</div>
          <div className="text-xl md:text-2xl">{description}</div>
        </div>
      </div>
      <div className={`flex items-center justify-center ${imageBgColor}`}>
        <Image src={image} alt="image" width={isMobile ? 100 : 160}></Image>
      </div>
      {!isMobile && <div className="flex-1" />}
    </div>
  );
};

export const Expectation = (): JSX.Element => {
  const isMobile = useIsMobile();

  return (
    <div
      className={`flex flex-col mx-3 md:mx-16 mt-6 md:mt-20 ${
        isMobile ? "gap-16" : ""
      }`}
    >
      <div
        className={`flex justify-center text-2xl md:text-4xl text-white font-semibold md:font-bold ${
          isMobile ? "" : "md:mb-24 mb-16"
        }`}
      >
        What to Expect
      </div>
      {EXPECTATION.map((expectation, index) => (
        <Description
          expectation={expectation}
          className={index % 2 && !isMobile ? "flex-row-reverse" : ""}
          descriptionClassName={
            index % 2 && !isMobile ? "border-l-0" : "border-r-0"
          }
        />
      ))}
    </div>
  );
};
