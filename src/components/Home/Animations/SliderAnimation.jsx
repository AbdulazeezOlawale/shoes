import {motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'

const SliderAnimation = ({children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Trigger animation when component comes into view

    const animationVariants = {
        hidden: {
            opacity: 0,
            y: 50, // Start slightly below the view
        },
        visible: {
            opacity: 1,
            y: 0, // Move to its original position
            transition: {
                duration: 1, // Adjust duration for smoothness
                ease: [0.22, 1, 0.36, 1], // Custom easing curve
            },
        },
    };

    return (
        <motion.section
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animationVariants}
        className="shop_by_class"
        >
            {children}
        </motion.section>
    )
}

export default SliderAnimation
