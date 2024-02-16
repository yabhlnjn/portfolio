import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const Slide = ({ children, delay, className, fromX, fromY}) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateX: fromX, translateY:fromY},
        visible: { opacity: 1, translateX: 0, translateY:0 },
      }}
      transition={{
        type:"just",
        ease: "easeInOut",
        duration: 0.4,
        delay: delay,
      }}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Slide;
