import "./Courses.css";
import Title from "./../../components/utility/title/Title";
import CoursesNav from "../../components/courses/courses-nav/CoursesNav";
import { Col, Container, Row } from "react-bootstrap";
import CoursesCard from "../../components/courses/courses-card/CoursesCard";
import img1 from "../../assets/images/course-02.jpg"
const Courses = () => {
  return (
    <section className="courses">

      <Container>
      <Title
        title="LATEST COURSES"
        info="Latest Courses"
      />
      <CoursesNav/>
        <Row xs={1} sm={1} md={2} lg={3} className="my-5">
          <Col><CoursesCard img={img1} title="Stella Blair" info="Learn Web Design" price="160"/></Col>

      
      
        </Row>
    </Container>
    </section>
  );
};

export default Courses;
