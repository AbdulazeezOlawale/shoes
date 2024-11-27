import React from 'react';
import { motion, useInView } from 'framer-motion';

export function LettersPullUp({ text}) {
  const splittedText = text.split(''); // Split the text into individual characters

  // Animation variants for each character
  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation when in view

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
        >
          {current === ' ' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
