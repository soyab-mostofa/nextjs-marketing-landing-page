import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/assets/svg/logo.svg";
import { BsFillLightningFill } from "react-icons/bs";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-light">
      <div className="container mx-auto p-2">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image height="40" width="70" src={Logo} />
          </Link>
          <div className="space-x-2 hidden md:block">
            <Link href="/home">
              <a>Home</a>
            </Link>
            <Link href="/service">
              <a>Service</a>
            </Link>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
            <Link href="/support">
              <a>Support</a>
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/contact">
              <a className="flex items-center">
                Contact <BsFillLightningFill />
              </a>
            </Link>
          </div>
          <div className="md:hidden">
            <MdOutlineMenu className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
