import TeamCard from "../../components/team/team-card/TeamCard";
import "./Team.css";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/images/member-01.jpg";
import img2 from "../../assets/images/member-02.jpg";
import img3 from "../../assets/images/member-03.jpg";
import img4 from "../../assets/images/member-04.jpg";
import TeamSlider from "../../components/team/team-slider/TeamSlider";

const Team = () => {
  const team = [
    { img: img1, title: "UX Teacher", info: "Sophia Rose" },
    { img: img2, title: "Graphic Teacher", info: "Cindy Walker" },
    { img: img3, title: "Full Stack Master", info: "David Hutson" },
    { img: img4, title: "Digital Animator", info: "Stella Blair" },
  ];
  return (
    <>
      <div className="container my-5">
        <Row xs={1} sm={1} md={2} lg={4}>
          {team.map((e, i) => {
            return (
              <Col key={i} className="my-5">
                <TeamCard img={e.img} title={e.title} info={e.info} />
              </Col>
            );
          })}
        </Row>
      </div>
      <Row xs={1} sm={1} md={2} lg={2}>
        <Col>
          <Container>
            <TeamSlider />
          </Container>
        </Col>
        <Col>bgkhhlj</Col>
      </Row>
    </>
  );
};

export default Team;
