import React from "react";
import Google from "../../public/assets/google.png";
import Colab from "../../public/assets/collab.png";
import Intercom from "../../public/assets/intercom.png";
import Netflix from "../../public/assets/netflex.png";
import Uber from "../../public/assets/uber.png";
import Slack from "../../public/assets/slack.png";
import Image from "next/image";

const icons = [Google, Colab, Uber, Slack, Intercom, Netflix];

const HeroContact = () => {
  return (
    <div className="container mx-auto py-5">
      <div className="py-5">
        <h3 className="text-center mb-3 text-2xl font-medium">
          The future is exciting. Lets shape it together.
        </h3>
        <p className="text-center">
          Start building your brand today with the best branding team. Let us
          give an oppurtunity to make your branding better.
        </p>
      </div>
      <div className="flex gap-3 flex-col justify-center">
        <div className="mx-auto">
          <input
            className="px-3 py-2 bg-[#F1F0EC] rounded-full focus:outline-none"
            type="text"
            placeholder="type in your email to get started "
          />
          <button className="-ml-8 px-3 py-2 bg-dark rounded-full text-light">
            Get Started
          </button>
        </div>
      </div>
      {/* brandlogos */}
      <div className="flex flex-wrap justify-center mt-10 mb-5 gap-3">
        {icons.map((icon, i) => {
          return (
            <div key={i} className="relative h-8 w-24">
              <Image layout="fill" objectFit="cover" src={icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroContact;
