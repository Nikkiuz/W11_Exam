import { Card, Col, Container, Row } from 'react-bootstrap'

const Novita = () => {
  return (
    <Container className="mb-5">
      <h1>Novità</h1>
      <hr />
      <Row className="g-1">
        <Col>
          <Card className="h-100 border-0">
            <Card.Body>
              <Card.Text className="fs-6">NUOVA STAZIONE RADIO</Card.Text>
              <Card.Text className="fs-3">
                Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
              </Card.Text>
            </Card.Body>
            <Card.Img src="public/assets/images/1a.png" />
          </Card>
        </Col>
        <Col>
          <Card className="h-100 border-0">
            <Card.Body>
              <Card.Text className="fs-6">NUOVA STAZIONE RADIO</Card.Text>
              <Card.Text className="fs-3">
                Ecco la nuova casa della musica latina
              </Card.Text>
            </Card.Body>
            <Card.Img src="public/assets/images/1b.png" />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Novita
