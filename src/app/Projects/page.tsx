"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import VideoArea from "@/components/VideoArea/index";

const Projects: FC = () => {
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
      <div>
        <h1 className="title">Highlighted Projects</h1>
        <div className="mt-2 md:mt-8">
          <VideoArea />
        </div>
      </div>
    </MotionWrapper>
  );
};

export default Projects;
