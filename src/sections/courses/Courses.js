import "./Courses.css";
import Title from "./../../components/utility/title/Title";
import CoursesNav from "../../components/courses/courses-nav/CoursesNav";
import { Col, Container, Row } from "react-bootstrap";
import CoursesCard from "../../components/courses/courses-card/CoursesCard";
import img1 from "../../assets/images/course-01.jpg";
import img2 from "../../assets/images/course-02.jpg";
import img3 from "../../assets/images/course-03.jpg";
import img4 from "../../assets/images/course-04.jpg";
import img5 from "../../assets/images/course-05.jpg";
import img6 from "../../assets/images/course-06.jpg";
import { useState } from "react";
import Zoom from "react-reveal/Zoom";
import CoursesNumbers from "../../components/courses/courses-numbers/CoursesNumbers";

const Courses = () => {
  const [name, setName] = useState("All");
  const courses = [
    {
      id: 1,
      name: "webdesign",
      content: [
        {
          img: img1,
          lecturer: "Stella Blair",
          info: "Learn Web Design",
          price: "160",
        },
        {
          img: img3,
          lecturer: "David Hutson",
          info: "Latest Web Trends",
          price: "640",
        },
        {
          img: img6,
          lecturer: "David Hutson",
          info: "Full Stack Developer",
          price: "240",
        },
      ],
    },
    {
      id: 2,
      name: "Development",
      content: [
        {
          img: img2,
          lecturer: "Cindy Walker",
          info: "Web Development Tips",
          price: "340",
        },
        {
          img: img4,
          lecturer: "Stella Blair",
          info: "Online Learning Steps",
          price: "450",
        },
        {
          img: img5,
          lecturer: "Sophia Rose",
          info: "Be a WordPress Master",
          price: "320",
        },
      ],
    },
    {
      id: 3,
      name: "Wordpress",
      content: [
        {
          img: img3,
          lecturer: "David Hutson",
          info: "Latest Web Trends",
          price: "640",
        },
        {
          img: img5,
          lecturer: "Sophia Rose",
          info: "Be a WordPress Master",
          price: "320",
        },
        {
          img: img6,
          lecturer: "David Hutson",
          info: "Full Stack Developer",
          price: "240",
        },
      ],
    },
  ];

  const data = (n) => {
    if (n !== "All") {
      return courses
        .filter((type) => type.name === n)
        .map((item) =>
          item.content.map((i) => (
            <Col key={Math.random()}>
              <Zoom>
                <CoursesCard
                  img={i.img}
                  lecturer={i.lecturer}
                  info={i.info}
                  price={i.price}
                  name={item.name}
                />
              </Zoom>
            </Col>
          ))
        );
    } else {
      return courses.map((item) =>
        item.content.map((i) => (
          <Col key={Math.random()}>
            <Zoom>
              <CoursesCard
                img={i.img}
                lecturer={i.lecturer}
                info={i.info}
                price={i.price}
                name={item.name}
              />
            </Zoom>
          </Col>
        ))
      );
    }
  };

  return (
    <section className="courses">
      <Container>
        <Title title="LATEST COURSES" info="Latest Courses" />

        <CoursesNav courses={courses} setName={setName} />
        <Row xs={1} sm={1} md={2} lg={3} className="my-5">
          {data(name)}
        </Row>
      </Container>
    
      <CoursesNumbers />
  
    </section>
  );
};

export default Courses;
