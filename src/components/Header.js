import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  console.log();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">DK</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link
            href="https://drive.google.com/file/d/1-0p2O1oNsxSKS_Pc9OvGpjRgakPyVCS6/view"
            target="_blank"
          >
            Resume
          </Nav.Link>
          <Nav.Link href="#Contact me">Contact me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
