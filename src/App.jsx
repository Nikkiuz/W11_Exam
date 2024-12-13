import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyMain from './components/MyMain'
import { Col, Row } from 'react-bootstrap'
import Sidebar from './components/Sidebar'
import MyFooter from './components/Myfooter'

function App() {
  return (
    <>
      <Row className='bg-dark text-bg-dark'>
        <Col className="d-none d-md-block" md={2}>
          <Sidebar />
        </Col>
        <Col sm={12} md={10}>
          <MyNav />
          <MyMain />
          <MyFooter />
        </Col>
      </Row>
    </>
  )
}

export default App
