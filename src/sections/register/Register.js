import { Col,  Row } from "react-bootstrap";
import ContactUs from "../../components/register/ContactUS";
import Form from "../../components/register/Form";

import "./Register.css";

const Register = () => {
  return (
    <Row xs={1} sm={1} md={2} lg={2} className="my-5 " >
      <Col>
      <ContactUs/>
    
      </Col>
      <Col>
      <Form/>
      </Col>
    </Row>
  );
};

export default Register;
