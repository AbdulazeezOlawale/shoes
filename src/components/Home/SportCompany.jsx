import React from 'react';
import { motion, useInView } from 'framer-motion';

const SportCompany = ({ styles }) => {
  // Create a ref for the container
  const ref = React.useRef(null);
  // useInView hook will tell us when the element is in viewport
  const isInView = useInView(ref, {
    once: true, // Only animate once
    amount: 0.2 // Trigger when 20% of the element is in view
  });

  // Defining the stagger and item animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
      },
    },
  };

  const brands = [
    { src: "./images/nike.png", alt: "nike" },
    { src: "./images/Jordan.png", alt: "Adidas" },
    { src: "./images/Diadora.png", alt: "Diadora" },
    { src: "./images/nb.png", alt: "new balance" },
    { src: "./images/columbia.png", alt: "columbia" },
    { src: "./images/Lotto.png", alt: "lotto" },
    { src: "./images/Puma.png", alt: "puma" },
    { src: "./images/Reebok.png", alt: "reebok" },
    { src: "./images/Umbro.png", alt: "umbro" },
    { src: "./images/Under-Armour.png", alt: "Under-Armour" }
  ];

  return (
    <motion.ul
      ref={ref}
      className={styles.companies_style}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {brands.map((brand, index) => (
        <motion.li key={index} variants={itemVariants}>
          <a href="/">
            <img src={brand.src} alt={brand.alt} />
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SportCompany;