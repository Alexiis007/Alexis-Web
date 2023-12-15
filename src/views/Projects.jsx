import "./Styles/Projects.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
export default function Projects() {
  return (
    <>
      <Nav />
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <Container className="Content-Projects">
          <Row>
            <Col className="Columna">
              <Image className="Imagen" src="https://i.ibb.co/722vMCv/C.png" />
              <div className="Informacion">
                <p>
                  Se creo una aplicacion de terminal para desarollar subredes
                  por el metodo VLSM y FLSM en el lenguaje C...
                </p>
                <div className="Content-Button">
                  <Button
                    href="https://docs.google.com/document/d/1cddgt7L_DZF-XWUAygK2Ia2dQ9C5fvhd/edit?usp=sharing&ouid=108332971825787547911&rtpof=true&sd=true"
                    variant="warning"
                  >
                    Descargar Documentacion.
                  </Button>
                </div>
                <div className="Content-LinkGithub">
                  <a href="#">Link del Repositorio</a>
                </div>
              </div>
            </Col>
            <Col className="Columna">
              <Image className="Imagen" src="https://i.ibb.co/NsjN8cB/C.png" />
              <div className="Informacion">
                <p>
                  Se desarrollo un sistema para talleres mecanicos, el cual
                  lleva el registro de entradas y salidas de los autos y
                  empleados...
                </p>
                <div className="Content-Button">
                  <Button variant="warning">Descargar Documentacion.</Button>
                </div>
                <div className="Content-LinkGithub">
                  <a href="https://github.com/Alexiis007/SistemaVencejo">Link del Repositorio</a>
                </div>
              </div>
            </Col>
            <Col className="Columna">
              <Image
                className="Imagen"
                src="https://i.ibb.co/qs0DDry/Java.png"
              />
              <div className="Informacion">
                <p>
                  Se desarrollo un sistema de entradas y salidas para llevar el
                  control en un centro de parquimetros llevando...
                </p>
                <div className="Content-Button">
                  <Button variant="warning">Descargar Documentacion.</Button>
                </div>
                <div className="Content-LinkGithub">
                  <a href="https://github.com/Alexiis007/SistemaDeParquimetros">Link del Repositorio</a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="Columna">
              <Image
                className="Imagen"
                src="https://i.ibb.co/M9gfnSh/Web.png"
              />
              <div className="Informacion">
                <p>
                  Se desarrollo una pagina web para los alumnos de la
                  universidad politecnica de García en la cual se...
                </p>
                <div className="Content-Button">
                  <Button
                    variant="warning"
                    href="https://docs.google.com/document/d/1n_d8WlPzrMDtTWAX4q6xNu3gOp39MbCY/edit?usp=sharing&ouid=108332971825787547911&rtpof=true&sd=true"
                  >
                    Descargar Documentacion.
                  </Button>
                </div>
                <div className="Content-LinkGithub">
                  <a href="https://github.com/Alexiis007/PaginaUPG">Link del Repositorio</a>
                </div>
              </div>
            </Col>
            <Col className="Columna">
              <Image
                className="Imagen"
                src="https://i.ibb.co/3B26MjH/React.png"
              />
              <div className="Informacion">
                <p>
                  Proyecto personal en el cual desarrolle una web de tipo
                  portafolio el cual sirve para mostrar mis proyectos y...
                </p>
                <div className="Content-Button">
                  <Button variant="warning">Descargar Documentacion.</Button>
                </div>
                <div className="Content-LinkGithub">
                  <a href="">Link del Repositorio</a>
                </div>
              </div>
            </Col>
            <Col className="Columna">
              <Image
                className="Imagen"
                src="https://i.ibb.co/mFbGg0V/vue.png"
              />
              <div className="Informacion">
                <p>
                  Se desarrollo una pequeña pagina web en la cual la idea es
                  crear una wikipedia sobre pokemones...
                </p>
                <div className="Content-Button">
                  <Button
                    variant="warning"
                    href="https://docs.google.com/document/d/1zfPKhWGqY3I1BfttY691-VincMdewo4M/edit?usp=sharing&ouid=108332971825787547911&rtpof=true&sd=true"
                  >
                    Descargar Documentacion.
                  </Button>
                </div>
                <div className="Content-LinkGithub">
                  <a href="https://github.com/Alexiis007/PokeWiki">Link del Repositorio</a>
                </div>
              </div>
            </Col>
          </Row>
          <div className="Content-Text">
            <h1>En resumen</h1>
            <p>
              Trato de mejorar mis habilidades de programacion por medio de la
              practica, ya sea en proyectos laborales o proyectos personales. La
              mayoria de proyectos han sido cruds en lenguajes de programacion
              con C# y java junto con SQL Sever aparte de varias paginas web las
              cuales algunas ya no estan en actividad.
            </p>
          </div>
        </Container>
      </ThemeProvider>
      <Footer />
    </>
  );
}
