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
console.log(Image1);

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
    <div className="static pt-10 bg-light">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto text-3xl text-center ">
          <div className="relative h-20">
            <h2 className="absolute z-20">Build, grow and manage your brand</h2>
            <span className="absolute z-0 -top-3 left-10">
              <Image height="50" width="50" src={SunIcon} />
            </span>
          </div>
        </div>
        <p className="relative max-w-lg mx-auto my-5 text-center">
          We implement Your brand for you, Hassle-Free. To ensure that your
          communication materials remain consistantly On-Brand.
          <span className="absolute hidden -right-20 top-5 md:inline-block">
            <Image height="50" width="100" src={Lines} />
          </span>
        </p>
        <div className="flex flex-col items-center justify-center mb-3 space-y-5 md:flex-row md:space-x-3 md:space-y-0">
          <Link href="/get-started">
            <a className="px-4 py-2 rounded-full bg-dark text-light">
              Get Started
            </a>
          </Link>
          <div>
            <a className="px-4 py-2 border-2 rounded-full border-dark ">
              Start video
            </a>
          </div>
        </div>
        <div className="grid items-end justify-center grid-cols-2 gap-3 py-3 md:flex">
          <ImageContainer height="200px">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={Image1.src}
            />
          </ImageContainer>
          <ImageContainer height="170px">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={Image2.src}
            />
          </ImageContainer>
          <ImageContainer height="170px">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={Image3.src}
            />
          </ImageContainer>
          <ImageContainer height="200px">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={Image4.src}
            />
          </ImageContainer>
        </div>
      </div>
      <div className="relative z-50 flex flex-col justify-around p-4 -mt-5 space-y-3 text-center md:flex-row bg-dark text-light md:space-y-0">
        <div>
          <h3 className="text-3xl font-bold">295</h3>
          <p>Project completed</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">23</h3>
          <p>Awards Gained</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">10</h3>
          <p>Branches</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
