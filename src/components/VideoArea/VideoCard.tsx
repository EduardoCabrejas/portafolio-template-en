"use client";
import { motion } from "framer-motion";

interface VideoCardProps {
  src: string;
  description: React.ReactNode;
}

const VideoCard = ({ src, description }: VideoCardProps) =>{
  return (
    <motion.div
      className="bg flex flex-col justify-between p-4 md:max-h-[80rem] h-full rounded-md"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <iframe
        className="w-full h-30 md:h-56 rounded-md mb-4"
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="overflow-auto flex-1">
        {description}
      </div>
    </motion.div>
  );
}


export default VideoCard;
