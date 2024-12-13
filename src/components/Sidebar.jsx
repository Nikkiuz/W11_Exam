import { Container, Form, InputGroup } from 'react-bootstrap'

const Sidebar = () => {
  return (
    <Container className="ms-3">
      <div className="mt-2 text-white">
        <img src="public/assets/logos/music.svg" alt="musiclogo" />
      </div>
      <div className="mt-3">
        <InputGroup className="mb-3 ">
          <InputGroup.Text className="text-danger">
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <Form.Control
            placeholder="Cerca"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
      </div>
      <div className="mt-2">
        <i className="text-danger bi bi-house-door"></i> <span>Home</span>
      </div>
      <div className="mt-2">
        <i className="text-danger bi bi-grid"></i> <span>Novità</span>
      </div>
      <div className="mt-2">
        <i className="text-danger bi bi-broadcast"> </i>
        <span>Radio</span>
      </div>
    </Container>
  )
}

export default Sidebar
