import { useRef } from "react";
import "./portfolio2.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    desc: "VESKO IS A PLATFORM PROVIDING ONLINE-TO-OFFLINE (O2O) RETAIL SOLUTIONS TAILORED FOR LOCAL OFFLINE RETAILERS",
  },
  {
    id: 2,
    desc: `Outstanding Features:
           <ul>
             <li>No Need for Separate storage.</li>
             <li>Direct Communication with Users.</li>
             <li>Semi Customisable Store.</li>
             <li>Point of sale system for offline sales.</li>
             <li>Secured payment system.</li>
             <li>Inventory Management System.</li>
             <li>Customisable Sales Dashboard.</li>
             <li>Ability to Offer Different Sell Options.</li>
             <li>Ability to Offer fast last mile delivery, as fast as 30 min.</li>
           </ul>`,
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="textContainer" ref={ref}>
            <motion.div style={{ y }} dangerouslySetInnerHTML={{ __html: item.desc }} />
          </div>
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
    <div className="portfolio" id="portfolio" ref={ref}>
      <div className="progress">
        <h2>What Vesko will provide for Local stores</h2>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio2;
