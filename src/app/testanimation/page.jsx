"use client";

import { motion } from "framer-motion";

const variants = {
  variant1: {
    x: 400,
    y: 300,
    opacity: 0.5,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
  variant2: {
    x: 100,
    y: -300,
    opacity: 1,
    rotation: 90,
  },
};

const TestPage = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-slate-500 rounded"
        variants={variants}
        animate="variant2"
      ></motion.div>
    </div>
  );
};

export default TestPage;
