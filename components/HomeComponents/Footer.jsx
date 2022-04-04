import Image from "next/image";
import React from "react";
import logo from "../../public/assets/svg/logo.svg";
import socialLogos from "../../public/assets/svg/socialMediaLinks.svg";

const links = ["Work", "About", "Services", "Contact", "Careers"];

const supportLinks = [
  "Support Articles",
  "Blog",
  "Affiliate Program",
  "Privacy Policy",
  "Find a brand to coach",
];
const Footer = () => {
  return (
    <div className="bg-dark pt-5">
      <div className="container space-y-5 px-2 mx-auto  text-light md:flex  justify-around">
        {/* company */}
        <div>
          <Image height="50" width="100" src={logo} />
          <p className="md:max-w-md">
            We implement your brand for you, hassle-free to insure that your
            communication materials remain consistently on-brand
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-xl">Oracle</h3>
          {links.map((link, i) => (
            <p key={i}>{link}</p>
          ))}
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-xl">Support</h3>
          {supportLinks.map((link, i) => (
            <p key={i}>{link}</p>
          ))}
        </div>
      </div>
      <div className="mt-3 border-t-2 pt-3 border-light container mx-auto px-2 md:flex justify-between items-center">
        <p className="text-light">
          Copyrignt 2022 Soyab Mostofa. all rignts reserved
        </p>
        <Image height="50" width="100" src={socialLogos} />
      </div>
    </div>
  );
};

export default Footer;
