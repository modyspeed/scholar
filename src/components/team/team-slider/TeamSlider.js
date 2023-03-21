import "./TeamSlider.css";
import { motion } from "framer-motion";
import TeamSliderInfo from "./team-slider-info/TeamSliderInfo";
import img1 from "../../../assets/images/member-01.jpg";
import img2 from "../../../assets/images/member-02.jpg";
import img3 from "../../../assets/images/member-03.jpg";
import img4 from "../../../assets/images/testimonial-author.jpg";
import { useEffect, useRef, useState } from "react";
const TeamSlider = () => {
  const [width, setWidth] = useState(0);
  useEffect(
    () => setWidth(carsul.current.scrollWidth - carsul.current.offsetWidth),
    []
  );
  const carsul = useRef();
  const info = [
    { img: img1, title: "UX Teacher", name: "Sophia Rose" },
    { img: img2, title: "Graphic Teacher", name: "Cindy Walker" },
    { img: img3, title: "Full Stack Master", name: "David Hutson" },
    { img: img4, title: "Digital Animator", name: "Stella Blair" },
  ];
  return (
    <motion.div ref={carsul} className="carousel ">
      <motion.div
        className="inner "
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        
      >
        {info.map((e, i) => (
          <motion.div className="item">
            <TeamSliderInfo key={i} img={e.img} title={e.title} name={e.name} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TeamSlider;
