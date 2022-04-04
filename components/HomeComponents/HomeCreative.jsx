import Image from "next/image";
import Link from "next/link";
import React from "react";
import CreativeImage1 from "../../public/assets/image 6.png";
import CreativeImage2 from "../../public/assets/image 7.png";
import Sun from "../../public/assets/svg/sun.svg";

const HomeCreative = () => {
  return (
    <div className="bg-light py-10">
      <div className="container mx-auto md:flex gap-5 justify-center">
        <div className="px-2 md:max-w-md md:mt-20">
          <h3 className="font-bold text-2xl pb-3">
            We think as strategists. We do as creators.
          </h3>
          <p className="pb-10">
            Insignts & Innovation | Brand strategy | Brand Design | Digital
            Experence
          </p>
          <Link href="#">
            <a className="px-4 py-3 rounded-full bg-dark text-light ">
              Our creative work
            </a>
          </Link>
        </div>
        <div className="flex relative flex-wrap gap-2 mt-10  mx-2 ml-5 ">
          <div className="relative border-4 border-dark  h-72 w-60">
            <Image layout="fill" src={CreativeImage1} />
          </div>
          <div className="relative border-4 border-dark h-52 w-40">
            <Image layout="fill" src={CreativeImage2} />
          </div>
          <div className="absolute -left-6 -top-8 bg-light rounded-full h-14 w-14">
            <Image src={Sun} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCreative;
