/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap'

const SingleSong = (props) => {
  return (
    <Card className="border-0 h-100 bg-dark text-white">
      <Card.Img src={props.song.album.cover} />
      <Card.Body className="text-start ms-0">
        <Card.Text>{props.song.title_short}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleSong
