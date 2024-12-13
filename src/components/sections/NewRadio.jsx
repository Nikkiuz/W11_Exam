import { Card, Col, Container, Row } from 'react-bootstrap'

const NewRadio = () => {
  return (
    <Container>
      <h4>
        Nuovi episodi radio
        <span>
          <i className="bi bi-chevron-right"></i>
        </span>
      </h4>
      <Row>
        <Col>
          <Card>
            <Card.Img src="public/assets/images/2a.png" />
            <Card.Body>
              <Card.Text>Pròlogo con Abuelo</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src="public/assets/images/2b.png" />
            <Card.Body>
              <Card.Text>The Wanderer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src="public/assets/images/2c.png" />
            <Card.Body>
              <Card.Text>Michael Bublé & Carly Pearce</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src="public/assets/images/2d.png" />
            <Card.Body>
              <Card.Text>Stephan Moccio: The Zane Lowe Interview</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src="public/assets/images/2e.png" />
            <Card.Body>
              <Card.Text>Chart Spotlight: Julia Michaels</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default NewRadio
