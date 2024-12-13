import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SingleSong from '../SingleSong'

const NewReleases = () => {
  const API_URL =
    'https://striveschool-api.herokuapp.com/api/deezer/search?q=novita'

  const [data, setData] = useState([])

  const getData = () => {
    fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero dati')
        }
      })
      .then((data) => {
        console.log('i dati', data)
        setData(data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(data)

  return (
    <Container className="mb-4">
      <h4>
        Nuove uscite
        <span>
          <i className="bi bi-chevron-right"></i>
        </span>
      </h4>
      <Row className="d-md-none g-3">
        {data.length !== 0 &&
          data.slice(0, 6).map((data) => {
            return (
              <Col key={data.id} xs={4}>
                <SingleSong song={data} />
              </Col>
            )
          })}
      </Row>
      <Row className="d-none d-md-flex g-3">
        {data.length !== 0 &&
          data.slice(0, 12).map((data) => {
            return (
              <Col key={data.id} md={2}>
                <SingleSong song={data} />
              </Col>
            )
          })}
      </Row>
    </Container>
  )
}

export default NewReleases
