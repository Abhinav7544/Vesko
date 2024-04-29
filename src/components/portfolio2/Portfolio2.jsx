import { useRef } from "react";
import "./portfolio2.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    desc: "VESKO IS A PLATFORM PROVIDING ONLINE-TO-OFFLINE (O2O) RETAIL SOLUTIONS TAILORED FOR LOCAL OFFLINE RETAILERS",
    backgroundColor: "#4ce4d5",
  },
  {
    id: 2,
    desc: [
           <ul>
            <p>OUR FEATURES</p>
             <li>No Need for Separate storage.</li>
             <li>Direct Communication with Users.</li>
             <li>Semi Customisable Store.</li>
             <li>Point of sale system for offline sales.</li>
             <li>Secured payment system.</li>
             <li>Inventory Management System.</li>
             <li>Customisable Sales Dashboard.</li>
             <li>Ability to Offer Different Sell Options.</li>
             <li>Ability to Offer fast last mile delivery, as fast as 30 min.</li>
           </ul>
    ],
    backgroundColor:"#0dc1af",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <section>
      <div className="container" style={{backgroundColor: item.backgroundColor}}>
        <div className="wrapper">
          <motion.div className="textContainer" style={{y}}>
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
    <div className="portfolio" id="portfolio2" ref={ref}>
    <div className="progress">
      <h2>Vesko for Local Vendors</h2>
      <motion.div style={{ scaleX }} className="progressBar"></motion.div>
    </div>
    {items.map((item) => (
      <Single item={item} key={item.id}/>
    ))}
  </div>
  );
};

export default Portfolio2;
