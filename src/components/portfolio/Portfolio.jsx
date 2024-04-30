import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    desc: "VESKO IS A PLATFORM PROVIDING ONLINE-TO-OFFLINE (O2O) RETAIL SOLUTIONS TAILORED FOR LOCAL OFFLINE RETAILERS",
    backgroundColor: "#A5D6A7",
  },
  {
    id: 2,
    desc: "THE PLATFORM IS A MARKETPLACE WHERE MERCHANTS CAN CREATE THEIR ONLINE STORE AND LIST PRODUCTS WITHIN MINUTES, ENABLING BOTH ONLINE AND OFFLINE SALES AND OFFERING FAST LOCAL DELIVERY",
    backgroundColor: "#81C784",
  },
 
  {
    id: 3,
    desc: "VESKO WILL BE THE FIRST OMNICHANNEL* PLATFORM THAT INCLUDES ONLINE, OFFLINE, DELIVERY, AND COMMUNICATION CHANNEL, ALL 4 IN 1",
    backgroundColor: "#A5D6A7",
  },
  {
    id: 4,
    desc: "VESKO WILL BE THE PIONEERING E-COMMERCE PLATFORM ELIMINATING THE NEED FOR SEPARATE WAREHOUSES. MERCHANTS CAN FULFILL ONLINE ORDERS DIRECTLY FROM THEIR STORE SHELVES",
    backgroundColor: "#81C784",
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
      <div className="container" style={{backgroundColor: item.backgroundColor}}>
        <div className="wrapper">
          <motion.div className="textContainer" style={{y}}>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
    <motion.div
    ref={ref}
    className="about"
    initial="initial"
    whileInView="animate"
  >
      <div className="progress">
        <h2>About Vesko</h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id}/>
      ))}
    </motion.div>
  );
};

export default Portfolio;
