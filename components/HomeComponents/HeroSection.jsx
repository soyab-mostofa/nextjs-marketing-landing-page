import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SunIcon from "../../public/assets/svg/sun.svg";
import Lines from "../../public/assets/svg/path.svg";
import Image1 from "../../public/assets/image 2.png";
import Image2 from "../../public/assets/image 3.png";
import Image3 from "../../public/assets/image 4.png";
import Image4 from "../../public/assets/image 5.png";

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  @media (min-width: 768px) {
    width: 10rem;
    height: ${(props) => props.height};
  }
`;

const HeroSection = () => {
  return (
    <div className="bg-light pt-10 static">
      <div className="container mx-auto">
        <div className=" text-3xl max-w-sm text-center mx-auto">
          <div className="relative h-20">
            <h2 className="z-20 absolute">Build, grow and manage your brand</h2>
            <span className="absolute z-0 -top-3 left-10">
              <Image height="50" width="50" src={SunIcon} />
            </span>
          </div>
        </div>
        <p className="text-center my-5 relative max-w-lg mx-auto">
          We implement Your brand for you, Hassle-Free. To ensure that your
          communication materials remain consistantly On-Brand.
          <span className="absolute hidden -right-20 top-5 md:inline-block">
            <Image height="50" width="100" src={Lines} />
          </span>
        </p>
        <div className="flex items-center flex-col md:flex-row space-y-5 md:space-x-3 md:space-y-0 justify-center mb-3">
          <Link href="/get-started">
            <a className="px-4 py-2 rounded-full bg-dark text-light">
              Get Started
            </a>
          </Link>
          <div>
            <a className="px-4 py-2 rounded-full border-2 border-dark ">
              Start video
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2  md:flex py-3 items-end gap-3 justify-center">
          <ImageContainer height="200px">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={Image1}
            />
          </ImageContainer>
          <ImageContainer height="170px">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={Image2}
            />
          </ImageContainer>
          <ImageContainer height="170px">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={Image3}
            />
          </ImageContainer>
          <ImageContainer height="200px">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={Image4}
            />
          </ImageContainer>
        </div>
      </div>
      <div className="bg-dark flex justify-around text-center text-light p-4 -mt-5 z-50 relative">
        <div>
          <h3 className="font-bold text-3xl">295</h3>
          <p>Project completed</p>
        </div>
        <div>
          <h3 className="font-bold text-3xl">23</h3>
          <p>Awards Gained</p>
        </div>
        <div>
          <h3 className="font-bold text-3xl">10</h3>
          <p>Branches</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
