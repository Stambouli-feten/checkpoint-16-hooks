import { Card } from "react-bootstrap";
import Button1 from "./button";
import StarRatingComponent from "react-star-rating-component";
function MovieCard(props) {
  return (
    <Card style={{ width: "18rem", marginBottom: "35px" }}>
      <Card.Img variant="top" src={props.movie.image} alt="img" />
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
        <Button1 url={props.movie.url} />
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
