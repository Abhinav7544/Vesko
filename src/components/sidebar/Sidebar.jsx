import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(()=>{
    const handler = (event)=>{
      if(!menuRef.current?.contains(event.target)){
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler);

    return()=>{
      document.removeEventListener("mousedown", handler)
    }
  }, [])

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"} ref={menuRef}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
