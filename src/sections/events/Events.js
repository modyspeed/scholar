import "./Events.css";
import Title from "./../../components/utility/title/Title";
import { Col, Container, Row } from "react-bootstrap";
import EventCard from "../../components/event-card/EventCard";
import img1 from "../../assets/images/event-01.jpg";
import img2 from "../../assets/images/event-02.jpg";
import img3 from "../../assets/images/event-03.jpg";
const Events = () => {
  const event = [
    {
      image: { img1 },
      type: "WEB DESIGN",
      title: "UI Best Practices",
      date: "16 Feb 2036",
      duration: "22 Hours",
      price: "$120",
    },
    {
      image: { img2 },
      type: "FRONT END",
      title: "New Design Trend",
      date: "30 Feb 2036",
      duration: "30 Hours",
      price: "$320",
    },
    {
      image: { img3 },
      type: "FULL STACK",
      title: "Web Programming",
      date: "12 Mar 2036",
      duration: "48 Hours",
      price: "$440",
    },
  ];
  return (
    <div className="events">
      <Title title="SCHEDULE" info="Upcoming Events" />
      <Container>
        <Row xs={1} sm={1} md={2} lg={1}>
          {event.map((e, i) => (
            <Col key={i}>
              <EventCard
                image={e.image}
                type={e.type}
                title={e.title}
                date={e.date}
                duration={e.duration}
                price={e.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Events;
