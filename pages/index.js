import Head from "next/head";
import Image from "next/image";
import HeroBranding from "../components/HomeComponents/HeroBranding";
import HeroContact from "../components/HomeComponents/HeroContact";
import HeroPartner from "../components/HomeComponents/HeroPartner";
import HeroSection from "../components/HomeComponents/HeroSection";
import HomeCreative from "../components/HomeComponents/HomeCreative";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroBranding />
      <HomeCreative />
      <HeroPartner />
      <HeroContact />
    </>
  );
}
