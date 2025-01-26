import { motion, useScroll, useTransform } from "framer-motion";

const ScrollProgressLine = () => {
  const { scrollYProgress } = useScroll();

  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "10px",
        backgroundColor: "#F582AE",
        width,
        zIndex: 50,
      }}
    />
  );
};

export default ScrollProgressLine;
