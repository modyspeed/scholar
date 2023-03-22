import "./TeamSlider.css";
import { motion } from "framer-motion";
import TeamSliderInfo from "./team-slider-info/TeamSliderInfo";
import img1 from "../../../assets/images/member-01.jpg";
import img2 from "../../../assets/images/member-02.jpg";
import img3 from "../../../assets/images/member-03.jpg";
import img4 from "../../../assets/images/testimonial-author.jpg";
import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const TeamSlider = () => {
  const info = [
    { img: img1, title: "UX Teacher", name: "Sophia Rose" },
    { img: img2, title: "Graphic Teacher", name: "Cindy Walker" },
    { img: img3, title: "Full Stack Master", name: "David Hutson" },
    { img: img4, title: "Digital Animator", name: "Stella Blair" },
  ];
  const [width, setWidth] = useState(0);
  const carsul = useRef();

  useEffect(
    () => setWidth(carsul.current.scrollWidth - carsul.current.offsetWidth),
    []
  );

  const [index, setIndex] = useState(0);
  const prev = () => {
    if (index === 0) {
      setIndex(info.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const next = () => {
    if (index === info.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
  <div className="position-relative">
      <motion.div ref={carsul} className="carousel ">
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{right:0,left:-width}}
        >
          {info.map((e, i) => (
            <motion.div  className="item">
              <TeamSliderInfo key={i} img={e.img} title={e.title} name={e.name} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
        <motion.div className="bt">
          <button className="team-slider-info-btn" onClick={prev}>
            <FaAngleLeft />
          </button>
          <button className="team-slider-info-btn" onClick={next}>
            <FaAngleRight />
          </button>
        </motion.div>
  </div>
  );
};

export default TeamSlider;
