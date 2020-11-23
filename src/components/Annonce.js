import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export default function Annonce(props) {
  // console.log("props", props);
  const movieItem = props.List.filter(
    (movie) => movie.Title === props.match.params.url
  )[0];
  // console.log("movie", movieItem);
  return (
    <div>
      <div className="acceuil">
        <Link exact to="/">
          <h3>Acceuil</h3>
        </Link>
      </div>
      <div className="description">
        <h4>Description of "{movieItem.Title}" :</h4>
        <br />
        <p>{movieItem.description}</p>
      </div>
      <div>
        <ReactPlayer controls={true} url={movieItem.url} />
      </div>
    </div>
  );
}
