"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-light-white text-light-black dark:bg-dark-blue dark:text-dark-white px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        404 - Page not Found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-lg md:text-xl mb-6"
      >
        Sorry, we can&apos;t found the page that you search.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          href="/"
          className="buttonBase bg-light-lightBlue2 hover:bg-light-lightBlue1 text-light-white dark:bg-dark-lightBlue2 dark:hover:bg-dark-darkBlue2 dark:text-dark-white hover:shadow-dark-lightBlue2 hover:ring-2 hover:ring-dark-lightBlue1 transition-all duration-300"
        >
          Come back to Home
        </Link>
      </motion.div>
    </div>
  );
}
