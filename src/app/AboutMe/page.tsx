"use client";
import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import profile from "@/assets/images/profile.png";
import backProfile from "@/assets/images/backProfile.png";
import gitHub from "@/assets/icons/GitHub_DKBlue.png";
import linkedin from "@/assets/icons/50 x 50/Lin.png";

const AboutMe: FC = () => {
  const isMobile = useIsMobile();
  const MotionWrapper = isMobile ? "div" : motion.div;

  return (
    <MotionWrapper
      {...(!isMobile && {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true, amount: 0.3 },
      })}
    >
      <h1 className="title flex justify-center items-center mt-8 md:mt-14 md:mb-4">
        Eduardo A. Cabrejas
      </h1>
      <div className="grid grid-cols-2 gap-4 mb-4 md:mb-8 md:gap-8">
        <div className="md:flex md:flex-row md:justify-end">
          <button
            onClick={() =>
              window.open("https://github.com/EduardoCabrejas", "_blank")
            }
            className="redirect-btn buttonBase"
          >
            <Image
              src={gitHub}
              alt="GitHub Icon"
              title="GitHub"
              className="w-[1.5rem] h-[1.5rem] md:w-[3.5rem] md:h-[3.5rem]"
            />
          </button>
        </div>
        <button
          onClick={() =>
            window.open("https://linkedin.com/in/eduardo-cabrejas", "_blank")
          }
          className="redirect-btn buttonBase"
        >
          <Image
            src={linkedin}
            alt="GitHub Icon"
            title="GitHub"
            className="w-[1.5rem] h-[1.5rem] md:w-[3.5rem] md:h-[3.5rem]"
          />
        </button>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 gap-x-4 items-center">
        <div className="flex justify-center items-center flex-col">
          <div className="relative w-[8rem] h-[8rem] md:w-[18rem] md:h-[18rem] [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)] perspective">
            <Image
              src={profile}
              alt="Profile Picture"
              className="absolute inset-0 w-full h-full rounded-full border-2 border-[var(--borderColor)] [backface-visibility:hidden]"
            />

            <Image
              src={backProfile}
              alt="Back Profile"
              className="absolute inset-0 w-full h-full rounded-full border-2 border-[var(--borderColor)] [transform:rotateY(180deg)] [backface-visibility:hidden]"
            />
          </div>
        </div>
        <p className="text">
          I am a Full Stack Developer, specialized in Front-End, passionate
          about solving challenges and problems in web development.
          <br />
          With over a year of experience, I seek to grow professionally and
          contribute value with my skills..
        </p>
      </div>
    </MotionWrapper>
  );
};

export default AboutMe;
