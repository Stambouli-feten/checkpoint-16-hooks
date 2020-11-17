import MovieCard from "./MovieCard";
// import "./MovieList.css";
function MovieList(props) {
  return (
    <div className="container">
      {props.List.map((el) => (
        <MovieCard movie={el} />
      ))}
    </div>
  );
}

export default MovieList;
