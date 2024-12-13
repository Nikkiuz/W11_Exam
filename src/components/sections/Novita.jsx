import { Card, Col, Container, Row } from 'react-bootstrap'

const Novita = () => {
  return (
    <Container className="mb-5">
      <h1>Novità</h1>
      <hr />
      <Row>
        <Col>
          <p>NUOVA STAZIONE RADIO</p>
          <h4>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</h4>
          <Card>
            <Card.Img src="public/assets/images/1a.png" />
          </Card>
        </Col>
        <Col>
          <p>NUOVA STAZIONE RADIO</p>
          <h4>Ecco la nuova casa della musica latina</h4>
          <Card>
            <Card.Img src="public/assets/images/1b.png" />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Novita
