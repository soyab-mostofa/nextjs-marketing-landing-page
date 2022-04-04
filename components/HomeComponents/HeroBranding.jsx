import React from "react";

import DevelopmentIcon from "../../public/assets/svg/devlopment.svg";
import BrandingIcon from "../../public/assets/svg/branding.svg";
import MediaIcon from "../../public/assets/svg/socialmedia.svg";
import UxIcon from "../../public/assets/svg/ux-ui.svg";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const icons = [
  {
    icon: BrandingIcon,
    label: "Branding",
    text: "Reviewing the Entrepeure definition of branding once again, The goal of a brand is to diffrenciate your organization",
  },
  {
    icon: DevelopmentIcon,
    label: "Developnemt",
    text: "Creative website design and developnent. We customise all websites to suit your needs whethe it be shop online website.",
  },
  {
    icon: UxIcon,
    label: "UX/UI",
    text: "We make complex applications simple for users we would be happy to implement your ideas in smooth UI and meaningful UX.",
  },
  {
    icon: MediaIcon,
    label: "Social media",
    text: "Social media indegration. feel comfortable that we know and understand the importance of social media.",
  },
];

const HeroBranding = () => {
  return (
    <div className="container mx-auto py-10 flex flex-col justify-center">
      <p className="md:max-w-md text-center font-bold text-2xl md:text-left w-full block">
        The branding platform built to support emerging businesses
      </p>
      <div className="space-y-2 px-2 md:grid grid-cols-2 mt-10">
        {icons.map((icon, i) => {
          return (
            <div
              key={i}
              className={`px-5 max-w-md py-5 rounded-md ${
                i === 0 || i === 2
                  ? "bg-dark md:text-black text-light md:bg-white"
                  : ""
              } `}
            >
              <Image height="40" width="40" src={icon.icon} />
              <h4 className="text-2xl font-medium">{icon.label}</h4>
              <p>{icon.text}</p>
              <Link href="#">
                <a className="flex space-x-3 mt-3">
                  <span> Learn More</span>

                  <BsArrowRight
                    className={`text-2xl ${
                      i === 0 || i === 2 ? "  text-light md:text-black" : " "
                    }`}
                  />
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroBranding;
