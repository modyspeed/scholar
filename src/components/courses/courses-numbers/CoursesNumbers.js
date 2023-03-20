import { Col, Container } from "react-bootstrap";
import "./CoursesNumbers.css";

const CoursesNumbers = () => {
  return (
    
    <div className="coursesNumbers">
      <Container className=" d-flex justify-content-around align-items-center flex-wrap " >
          <div>
            <h1>150+</h1>
            <p>Happy Students</p>
          </div>
          <div>
            <h1>804+</h1>
            <p>Course Hours</p>
          </div>
          <div>
            <h1>50+</h1>
            <p>Employed Students</p>
          </div>
          <div>
            <h1>15+</h1>
            <p>Years Experience</p>
          </div>
          </Container>
    </div>
  
  );
};

export default CoursesNumbers;
