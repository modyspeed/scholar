import TeamCard from "../../components/team/team-card/TeamCard";
import "./Team.css";
import { Col, Row } from "react-bootstrap";
import img1 from "../../assets/images/member-01.jpg"
import img2 from "../../assets/images/member-02.jpg"
import img3 from "../../assets/images/member-03.jpg"
import img4 from "../../assets/images/member-04.jpg"
const Team = () => {
  return (
    <div className="container my-5">
      <Row xs={1} sm={1} md={2} lg={4}>
        <Col className="my-5">
          <TeamCard img={img1} title="UX Teacher" info="Sophia Rose"/>
        </Col>
        <Col className="my-5">
          <TeamCard img={img2} title="Graphic Teacher" info="Cindy Walker"/>
        </Col>
        <Col className="my-5">
          <TeamCard img={img3} title="Full Stack Master" info="David Hutson"/>
        </Col>
        <Col className="my-5">
          <TeamCard img={img4} title="Digital Animator" info="Stella Blair"/>
        </Col>
    

      </Row>
    </div>
  );
};

export default Team;
