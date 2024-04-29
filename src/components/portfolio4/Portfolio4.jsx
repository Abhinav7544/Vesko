import { useRef } from "react";
import "./portfolio4.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
desc: "The advance version of Vesko will be able to forecast consumer demands to help Vendors to optimizing their product line to increase sales."
  },
  {
    id: 2,
desc: "Vesko will include Cyber Space that provides Users with tailored products without wasting time on info & product search."  },
  {
    id: 3,
desc: "The inventory management system will also include the Cyber Space to assist the employees and optimize store operations to minimize waste"  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
      
          <motion.div className="textContainer" style={{y}}>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio4 = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h2>Advanced Version of Vesko</h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio4;
