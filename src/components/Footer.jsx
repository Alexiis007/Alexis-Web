import "./Styles/Footer.css";
import Card from 'react-bootstrap/Card';

export default function Footer() {
  return (
    <footer className="footer">
      <Card className="card text-center">
        <Card.Header>Derechos reservados 2023.</Card.Header>
        <Card.Body>
          <Card.Title>Alexsis007 - Web</Card.Title>
          <Card.Text>
            El conocimiento esta a la palma de tu mano.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="textData">Ultima actualizacion 11/12/2023</Card.Footer>
      </Card>
    </footer>
  );
}
