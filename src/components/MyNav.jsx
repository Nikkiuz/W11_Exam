import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">
          <svg
            height="20"
            viewBox="0 0 83 20"
            width="83"
            xmlns="http://www.w3.org/2000/svg"
            className="logo"
            aria-hidden="true"
          ></svg>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default MyNav
