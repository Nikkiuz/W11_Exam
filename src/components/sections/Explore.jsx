import { Button, Col, Container, Row } from 'react-bootstrap'

const Explore = () => {
  return (
    <Container>
      <Row className="g-2">
        <Col sm={12} md={4}>
          <Button className="text-danger bg-dark bg-dark text-start w-100 d-flex justify-content-between pt-4 pb-4 border-dark">
            Esplora per genere
            <div>
              <i className="bi bi-chevron-right"></i>
            </div>
          </Button>
        </Col>
        <Col sm={12} md={4}>
          <Button className="text-danger bg-dark text-start w-100 d-flex justify-content-between pt-4 pb-4 border-dark">
            Decenni
            <div>
              <i className="bi bi-chevron-right"></i>
            </div>
          </Button>
        </Col>
        <Col sm={12} md={4}>
          <Button className="text-danger bg-dark text-start w-100 d-flex justify-content-between pt-4 pb-4 border-dark">
            Attività e stati d animo
            <div>
              <i className="bi bi-chevron-right"></i>
            </div>
          </Button>
        </Col>
        <Col sm={12} md={4}>
          <Button className="text-danger bg-dark text-start w-100 d-flex justify-content-between pt-4 pb-4 border-dark">
            Worldwide
            <div>
              <i className="bi bi-chevron-right"></i>
            </div>
          </Button>
        </Col>
        <Col sm={12} md={4}>
          <Button className="text-danger bg-dark text-start w-100 d-flex justify-content-between pt-4 pb-4 border-dark">
            Classifiche
            <div>
              <i className="bi bi-chevron-right"></i>
            </div>
          </Button>
        </Col>
        <Col sm={12} md={4}>
          <Button className="text-danger bg-dark text-start w-100 d-flex justify-content-between pt-4 pb-4 border-dark">
            Audio spaziale
            <div>
              <i className="bi bi-chevron-right"></i>
            </div>
          </Button>
        </Col>
        <Col sm={12} md={4}>
          <Button className="text-danger bg-dark text-start w-100 d-flex justify-content-between pt-4 pb-4 border-dark">
            Video musicali
            <div>
              <i className="bi bi-chevron-right"></i>
            </div>
          </Button>
        </Col>
        <Col sm={12} md={4}>
          <Button className="text-danger bg-dark text-start w-100 d-flex justify-content-between pt-4 pb-4 border-dark">
            Nuovi artisti
            <div>
              <i className="bi bi-chevron-right"></i>
            </div>
          </Button>
        </Col>
        <Col sm={12} md={4}>
          <Button className="text-danger bg-dark text-start w-100 d-flex justify-content-between pt-4 pb-4 border-dark">
            Hit del passato
            <div>
              <i className="bi bi-chevron-right"></i>
            </div>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Explore
