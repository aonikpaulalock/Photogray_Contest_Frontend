import { motion, useScroll, useTransform } from "framer-motion";

const ScrollProgressLine = () => {
  // Replacing useViewportScroll with useScroll
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to dynamic width
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "10px", // Adjust the height for thickness
        backgroundColor: "#F582AE", // Line color
        width, // Dynamic width from scroll progress
        zIndex: 50,
      }}
    />
  );
};

export default ScrollProgressLine;
