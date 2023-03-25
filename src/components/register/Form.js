import { Container } from "react-bootstrap"
import Buttons from "../utility/buttons/Buttons"

const Form = () => {
  return (
    <Container>
    <div className="form ">
        <input type="text" placeholder="Your Name"/>
        <input type="email" placeholder="Your Email"/>
        <textarea placeholder="Your Message"/>
        <Buttons content="Send Message Now"/>
    </div>
    </Container>
  )
}

export default Form