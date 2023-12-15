import NavigationBar from "../components/Nav";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./Styles/AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <NavigationBar />
      <div className="contenido">
        <div className="Informacion">
          <h1>Informacion.</h1>
          <p>
            Hola soy Christian Alexis Juárez Rodríguez ingeniero en sistemas
            computacionales egresado de la universidad politecnica de García
            Nuevo Leon, naci el 18/09/2003 y actualmente radico en García Nuevo
            Leon. Me gusta la programacion y todo lo que es la logica de un buen
            codigo, me gusta estar en constante aprendizaje y desarrollar
            proyectos nuevos constantemente.
          </p>
          <div className="Content-Imagen-Dibujos">
            <Image
              className="Imagen-Dibujos"
              src="https://i.ibb.co/QDPzw6J/Porgramador.png"
            />
          </div>
        </div>
        <div className="Informacion">
          <h1>Conocimientos.</h1>
          <ul>
            <li>Java EE</li>
            <li>C#</li>
            <li>JavaScript</li>
            <li>SQL Server</li>
            <li>CISCO</li>
            <li>HTML y CSS</li>
            <li>React</li>
            <li>Node Js</li>
            <li>Boostrap</li>
            <li>Xamarin</li>
          </ul>
          <p>
            Estos conocimientos fueron adquiridos en la universidad y por parte
            de cursos, en cuanto a nivel de experiencia en la mayoria me
            considero nivel trayne o principiante, aunque en otros estoy mas
            avanzado.
          </p>
          <div className="Content-Imagen-Dibujos">
            <Image
              className="Imagen-Dibujos"
              src="https://i.ibb.co/JcgGVXm/Estudiar.png"
            />
          </div>
        </div>
        <div className="Informacion">
            <h1>Nivel de ingles.</h1>
            <p>
              En cuanto a mi nivel de ingles, estoy en un nivel B2 con un
              porcentaje de entre 58%-64% Tengo buena redaccion en ingles,
              entiendo bien el ingles escrito y el ingles hablado se me
              dificulta un poco mas. En cuanto a conversaciones en ingles estoy
              un poco atrasado. Se me dificulta entablar una buena conversacion
              por la falta de buena estructura gramatical, pero intento estudiar
              cuando puedo.
            </p>
            <div className="Content-Imagen-Dibujos">
              <Image
                className="Imagen-Dibujos"
                src="https://i.ibb.co/yyQ0DQr/ingles.png"
              />
            </div>
          </div>
        <div className="CV">
          <h1>Curriculum Vitae</h1>
          <Image
            src="https://i.ibb.co/WB5cW6Z/CV.png"
            rounded
            className="Imagen-CV"
          />
          <Button
            className="DescargarCV"
            href="https://drive.google.com/file/d/13NoaDBXAw5qtRq3YaE37oif1CYMkZT6t/view?usp=sharing"
          >
            Descargar CV
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
