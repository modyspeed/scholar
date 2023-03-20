import { Col, Container, Row } from "react-bootstrap";
import "./CoursesNumbers.css";

const CoursesNumbers = () => {
  return (
    <Row className="coursesNumbers my-5" md={2} lg={4}>
    
        <Col>
          <h1>150+</h1>
          <p>Happy Students</p>
        </Col>
        <Col>
          <h1>804+</h1>
          <p>Course Hours</p>
        </Col>
        <Col>
          <h1>50+</h1>
          <p>Employed Students</p>
        </Col>
        <Col>
          <h1>15+</h1>
          <p>Years Experience</p>
        </Col>
    
    </Row>
  );
};

export default CoursesNumbers;
