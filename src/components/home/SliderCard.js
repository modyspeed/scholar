import Buttons from "../utility/buttons/Buttons";
import { AiFillCaretRight } from "react-icons/ai";

const SliderCard = (props) => {
  return (
    <div className="sliderCard">
      <img src={props.img} alt="bg"/>
      <div className="sliderCard-content">
        <h6>{props.title}</h6>
        <h1>{props.info}</h1>
        <p>
          {props.des}
        </p>
        <div className="sliderCard-btn my-5">
          <Buttons content="Request Demo"/>
          <button><AiFillCaretRight/></button>
          <span>{props.qus}</span>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
