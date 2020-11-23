import { Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
function MovieCard(props) {
  return (
    <Card style={{ width: "18rem", marginBottom: "35px" }}>
      <Link to={`/annonce/${props.movie.Title}`}>
        <Card.Img variant="top" src={props.movie.image} alt="img" />
      </Link>
      <Card.Body>
        <Card.Title>
          {props.movie.Title}({props.movie.date})
        </Card.Title>
        <Card.Text>{props.movie.description}</Card.Text>
        <StarRatingComponent
          name="rate2"
          editing={false}
          starCount={5}
          value={props.movie.rate}
        />{" "}
        <br />
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
