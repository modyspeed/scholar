import { Card } from "react-bootstrap";
import "./CoursesCard.css";
const CoursesCard = (props) => {
  return (
    <Card className="coursesCard">
      <Card.Img src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.info}</Card.Text>
      </Card.Body>
      <div className="round">
        <sup>$</sup>
        {props.price}
      </div>
    </Card>
  );
};

export default CoursesCard;
