import "./NavBar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../cart-widget/CartWidget";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">CPHMR</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={"me-auto my-2 my-lg-0"}
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>

            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="./productos/ofertas">
                Ofertas
              </NavDropdown.Item>
              <NavDropdown.Item href="./productos/novedades">
                Novedades
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="./productos/telefonos">
                Telefonos
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="./productos/notebooks">
                Notebooks
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
