import Image from "next/image";
import React from "react";
import SunIcon from "../../public/assets/svg/sun.svg";
import Shoe from "../../public/assets/shoedesign.png";
import Stroke from "../../public/assets/svg/path.svg";
import Link from "next/link";

const HeroPartner = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto flex items-center flex-col ">
        {/* heading */}
        <div className="relative max-w-md">
          <h1 className="z-10 relative font-bold text-2xl pb-3 text-center ">
            These are just few of the companies that we have partnered with
          </h1>
          <div>
            <div className="absolute left-5 -top-4 bg-light rounded-full h-14 w-14">
              <Image src={SunIcon} />
            </div>
          </div>
        </div>

        {/* details */}
        {/* left */}
        <div className="flex items-center md:flex-row flex-col px-2 md:gap-44">
          <div>
            <div className=" relative h-72 w-52">
              <Image layout="fill" src={Shoe} />
              <p className="bg-dark absolute -rotate-90 text-light py-1 px-8 top-28 -right-24 rounded-xl">
                Branding
              </p>
              <p className="bg-dark absolute -rotate-90 text-light py-1 px-5 top-28 -right-32 rounded-xl">
                Promotion
              </p>
            </div>
          </div>
          {/* right */}
          <div>
            <div className="relative h-10 w-20 ml-10 my-10">
              <Image src={Stroke} />
            </div>
            <p className="mb-5 max-w-md">
              Checkout the cool work we have done together. Every brand is
              unique with diffrent products, Target audiences, and Business
              goals. That’s why we use the best-in-class technology tools to
              analize large volumes.
            </p>
            <Link href="#">
              <a className="bg-dark px-4 py-2 rounded-full text-light ">
                See all our work
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPartner;
