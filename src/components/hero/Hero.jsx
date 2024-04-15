import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <div>
          <motion.h1 variants={textVariants}>Vesko</motion.h1>
          <motion.p>Pioneering the next generation of e-commerce</motion.p>
          </div>
          <motion.div variants={textVariants} className="buttons">
            <motion.a variants={textVariants} href="/#contact">Contact us</motion.a>
          </motion.div>
        </motion.div>

        <div className="imageContainer">
          <img src="/favicon.ico" alt="vesko_logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
