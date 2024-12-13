import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyMain from './components/MyMain'
import { Col, Row } from 'react-bootstrap'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Row>
        <Col sm={12} md={10}>
          <MyNav />
          <MyMain />
        </Col>
        <Col className='d-none d-md-block' md={2}>
        <Sidebar />
        
        </Col>
      </Row>
    </>
  )
}

export default App
