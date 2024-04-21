import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Help Businesses",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "As the digital landscape continues to expand, businesses increasingly rely on online platforms to connect with customers. However, the expenses associated with building, maintaining, and updating digital sites can be prohibitive for small businesses. This often leads to closures or restricted market presence. Vesko offers a solution by assisting businesses in establishing their digital presence at a minimal cost, enabling them to reach a broader customer base. We are dedicated to supporting small businesses in enhancing their sales and continuing to serve their customers effectively.",
  },
  {
    id: 2,
    title: "Fast Delivery",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Vesko is dedicated to ensuring prompt delivery of your orders from local vendors, with a delivery window of up to 30 minutes. Whether it's a last-minute gift, a crucial outfit, or any urgent item you need, Vesko is here to swiftly fulfill your needs right at your doorstep.",
  },
 
  {
    id: 3,
    title: "Create Opportunities",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Vesko is revolutionizing the way stores connect with customers by offering digital channels, opening up a world of possibilities for both businesses and consumers. Through Vesko, stores can tap into the digital market while retaining their local charm, giving customers access to a diverse range of options. Now, people can shop from their beloved local vendors alongside the dominant presence of larger stores in the existing digital market.",
  },
  {
    id: 4,
    title: "Unique Experience",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Vesko is designed to enhance the digital experience for both businesses and customers alike. By utilizing Vesko, individuals can enjoy a more user-friendly approach to digital shopping. With features like streamlined order management and convenient options for canceling orders or exchanging products, Vesko ensures a hassle-free experience."
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
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
    <div className="portfolio" id="portfolio" ref={ref}>
      <div className="progress">
        <h1>What we do</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
