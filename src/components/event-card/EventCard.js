import "./EventCard.css";

import Buttons from "../utility/buttons/Buttons";
import { FaAngleRight } from "react-icons/fa";
const EventCard = (props) => {
  return (
    <div className="event-card flex-lg-row h-lg-25">
      <img src={props.image} alt="event-img" />
      <div className="event-info ">
        <div className="event-info-item">
          <Buttons content={props.type} />
          <h4 className="mt-2">{props.title}</h4>
        </div>
        <div className="event-info-item">
          <p>
            DAta: <br />
            <span> {props.date}</span>
          </p>
        </div>
        <div className="event-info-item">
          <p>
            Duration: <br />
            <span> {props.duration}</span>
          </p>
        </div>
        <div className="event-info-item">
          <p>
          Price: <br />
            <span> {props.price}</span>
          </p>
        </div>

        <div className="link">
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
//make slider with framer motion?