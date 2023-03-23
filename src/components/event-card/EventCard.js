import "./EventCard.css";
import event1 from "../../assets/images/event-01.jpg";
import Buttons from "../utility/buttons/Buttons";
const EventCard = () => {
  return (
    <div className="event-card flex-lg-row h-lg-25">
      <img src={event1} alt="event-img" />
      <div className="event-title my-4">
        <Buttons content="Webdesign" />
        <h4>UI Best Practices</h4>
      <hr/>
      </div>
      <div className="event-info d-flex justify-content-between align-items-center">
        <div className="event-info-item">
          <p>
            DAta: <br />
            <span> 12 Mar 2036</span>
          </p>
        </div>
        <div className="event-info-item">
          <p>
          Duration: <br />
            <span> 48 Hours</span>
          </p>
        </div>
        <div className="event-info-item">
          <p>
          Price: <br />
            <span> $440</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
