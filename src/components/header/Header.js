import {  Container, Form, Nav, Navbar } from "react-bootstrap"
import "./Header.css"

const Header = () => {
  return (
    <Navbar className="navBar " sticky="top"  expand="lg">
    <Container >
      <Navbar.Brand className="logo" href="#home">SCHOLAR</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0 "
          style={{ maxHeight: '100px' }}
          
        >
        <Form className="d-flex ">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 search"
            aria-label="Search"
          />
    
        </Form>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#courses">Courses</Nav.Link>
          <Nav.Link href="#team">Team</Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          <Nav.Link href="#register">Register Now!</Nav.Link>
  
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header