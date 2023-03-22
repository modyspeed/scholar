import "./TeamSliderInfo.css";

const TeamSliderInfo = (props) => {
  return (
    <div className="team-slider-info">
      <p>
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        officia sed tempore laudantium debitis natus inventore! Maxime, amet eum
        dolor, in doloribus voluptatibus cum odio eaque corrupti, iure delectus
        ipsa?"
      </p>
      <div className="d-flex gap-3 name">
        <img src={props.img} alt="img" />
        <div>
          <p>{props.title}</p>
          <h1>{props.name}</h1>
        </div>
      </div>
  
    </div>
  );
};

export default TeamSliderInfo;
