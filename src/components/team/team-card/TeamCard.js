import "./TeamCard.css";

import Title from "./../../utility/title/Title";

import { FaFacebook,FaTwitter,FaLinkedin } from 'react-icons/fa';

const TeamCard = (props) => {
  return (
    <div className="teamCard my-3">
      <img src={props.img} alt="img" />
      <Title title={props.title} info={props.info}  />
      <ul className="team-card-social d-flex gap-1 align-items-center">
         <li><FaFacebook/></li>
         <li><FaTwitter/></li>
         <li><FaLinkedin/></li>
      </ul>
    </div>
  );
};

export default TeamCard;
