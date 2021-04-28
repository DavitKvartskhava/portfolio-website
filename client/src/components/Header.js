import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  console.log();
  return (
    <>
      <Navbar className="justify-content-between abs" expand="lg">
        <Navbar.Brand className="ml-sm-2" href="#home">
          DK
        </Navbar.Brand>
        <Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1-0p2O1oNsxSKS_Pc9OvGpjRgakPyVCS6/view"
              target="_blank"
            >
              Resume
            </Nav.Link>
            <Nav.Link href="#Contact me">Contact me</Nav.Link>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
      <hr className="line" />
      <br />
    </>
  );
};

export default Header;
