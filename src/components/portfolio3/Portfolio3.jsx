import { useRef } from "react";
import "./portfolio3.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    desc: [
      <ul>
        <p>OUR FEATURES</p>
        <li>
          For Users, Vesko can provide them not only with fast delivery, but
          also have different purchasing options and ability to communicate with
          Vendors easily.
        </li>
        <li>
          User, they can choose to get offers & deals newsletter from their
          favorite stores and brands.
        </li>
      </ul>,
    ],
    backgroundColor: "LightGreen",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <section>
      <div
        className="container"
        style={{ backgroundColor: item.backgroundColor }}
      >
        <div className="wrapper">
          <motion.div className="textContainer" style={{ y }}>
            {item.desc}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio2 = () => {
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
        <h2>Vesko for its Users</h2>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio2;
