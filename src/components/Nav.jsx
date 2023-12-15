import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "./Styles/Nav.css";
import { Link, Outlet } from "react-router-dom";
export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="Navbar" bg="dark" data-bs-theme="dark">
      <Image
        className="Logo"
        src="https://i.ibb.co/WPtyR6f/Logo-Fuego-Rojo.png"
      />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
            <Link className="Ruta" to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="Ruta" to="/Sobre-Mi">
              Acerca de mi.
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="Ruta" to="/Proyectos">
              Proyectos
            </Link>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/christian-ju%C3%A1rez-rodr%C3%ADguez-066a9526b">Linkedin</Nav.Link>
          <Nav.Link href="https://github.com/Alexiis007">GitHub</Nav.Link>
          <Nav.Link href="https://wa.me/8110482774" text="Hola%20buenas%20dia%20Alexis%20...">+52 8110482774</Nav.Link>
        </Nav>
        <Outlet />
      </Navbar.Collapse>
    </Navbar>
  );
}
