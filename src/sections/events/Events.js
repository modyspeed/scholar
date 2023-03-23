import "./Events.css"
import Title from './../../components/utility/title/Title';
import { Col, Container, Row } from "react-bootstrap";
import EventCard from "../../components/event-card/EventCard";

const Events = () => {
  return (
    <div className="events">
      <Title title="SCHEDULE" info="Upcoming Events"/>
    <Container>
        <Row xs={1} sm={1} md={2} lg={1} >
          <Col >
          <EventCard/>
          </Col>
          <Col >
          <EventCard/>
          </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Events