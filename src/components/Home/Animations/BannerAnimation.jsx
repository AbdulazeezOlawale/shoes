import React from 'react';
import { motion } from 'framer-motion';

const BannerAnimation = ({ children}) => {
  // Define animation variants
  const slideInVariants = {
    hidden: { x: '50%', opacity: 0 }, // Start off-screen to the right
    visible: {
      x: 0, // Slide to the original position
      opacity: 1,
      transition: {
        type: 'spring', // Smooth spring animation
        damping:10, // Control the spring damping
        stiffness: 100, // Control the spring stiffness
        duration: 0.1, // Optional for timing fine-tuning
      },
    },
  };

  return (
    <motion.div
      variants={slideInVariants} // Apply the animation variants
      initial="hidden" // Initial state (off-screen)
      animate="visible" // Target state (original position)
    >
      {children}
    </motion.div>
  );
};

export default BannerAnimation;
