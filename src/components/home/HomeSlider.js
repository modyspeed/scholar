import { useState } from "react";
import img1 from "../../assets/images/banner-item-01.jpg";
import img2 from "../../assets/images/banner-item-02.jpg";
import img3 from "../../assets/images/banner-item-03.jpg";
import SliderCard from "./SliderCard";
import {  motion } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const HomeSlider = () => {
  const [index, setIndex] = useState(0);
  const sliderData = [
    {
      img: img1,
      title: "OUR COURSES",
      info: "With Scholar Teachers, Everything Is Easier",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo sunt eveniet maiores magnam? Corporis quos repellat",
      qus: "What is scholar?",
    },
    {
      img: img2,
      title: "BEST RESULT",
      info: "Get The best result out of your effort",
      des: "online learning hnelps you save the time",
      qus: "What the best result?",
    },
    {
      img: img3,
      title: "ONLINE LEARNING",
      info: "online learning hnelps you save the time",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo sunt eveniet maiores magnam? Corporis quos repellat minus voluptas laboriosam",
      qus: "What is online courses?",
    },
  ];
  const prev = () => {
    if (index === 0) {
      setIndex(sliderData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const next = () => {
    if (index === sliderData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <motion.div className="homeSlider">
      <motion.div drag="x" dragConstraints={{left:0,right:0,}} className="sliderContainer">
        <SliderCard
          img={sliderData[index].img}
          title={sliderData[index].title}
          info={sliderData[index].info}
          des={sliderData[index].des}
          qus={sliderData[index].qus}
        />
      </motion.div>
      <motion.div className="bt">
        <button className="team-slider-info-btn" onClick={prev}>
          <FaAngleLeft />
        </button>
        <button className="team-slider-info-btn" onClick={next}>
          <FaAngleRight />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default HomeSlider;
