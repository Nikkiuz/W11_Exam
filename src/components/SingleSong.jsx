/* eslint-disable react/prop-types */
import { Card } from 'react-bootstrap'

const SingleSong = (props) => {
  return (
    <Card className="border-0">
      <Card.Img src={props.song.album.cover} />
      <Card.Body>
        <Card.Text>{props.song.title_short}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleSong
