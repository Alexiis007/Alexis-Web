import NavigationBar from "../components/Nav";
import Footer from "../components/Footer";
import "./Styles/Home.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className="Titulo">
        <h1>Bienvenido a Alexis - Web</h1>
      </div>
      <div className="Informacion">
        <h1 className="informacion-titulo">Informacion:</h1>
        <p className="informacion-texto">
          Pagina Web estilo portafolio laboral en el cual podras encontrar
          informacion sobre mi y los proyectos que he desarrollado a lo largo de
          mi carrera. Tambien encontraras metodos de contacto.
        </p>
      </div>
      <div className="Carrusel">
        <Carousel>
          <Carousel.Item>
            <Image
              className="imagen-carrusel"
              src="https://i.ibb.co/XxKNMH8/CMD.png"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="imagen-carrusel"
              src="https://i.ibb.co/86ssbTQ/PokeWiki.png"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="imagen-carrusel"
              src="https://i.ibb.co/D4sLcCc/Pagina.png"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Informacion">
        <h1 className="informacion-titulo">¿Quien desarrollo esta pagina?</h1>
        <p className="informacion-texto">
          Esta pagina fue desarrollada por mi Christian Alexis Juárez Rdz, la
          desarrolle con el framework react y esta alojada en firebase.
        </p>
      </div>
      <div className="Gift">
        <div className="Content-Imagen-Dibujos">
          <Image
            className="Imagen-Dibujos"
            src="https://media.tenor.com/zEzrCBd_6i8AAAAd/hacker%C4%B1m-hacker.gif"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
