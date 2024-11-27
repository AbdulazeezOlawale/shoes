import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TitleAnimation = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when it comes into view

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: -50, // Start above the view
    },
    visible: {
      opacity: 1,
      y: 0, // Move to its natural position
      transition: {
        duration: 1.5, // Adjust duration for a smoother effect
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth animation
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants}
    >
      {text}
    </motion.div>
  );
};

export default TitleAnimation;
