const StarRatingComponent = require("react-star-rating-component");

function Search(props) {
  const handleChange = (e) => {
    props.setFiltrer({ ...props.filtrer, text: e.target.value });
  };
  const onStarClick = (nextValue, prevValue, name) => {
    props.setFiltrer({ ...props.filtrer, rate: nextValue });
  };
  return (
    <>
      <br />
      <br />
      <input type="text" placeholder="Search" onChange={handleChange} />
      <br />
      <br />
      <StarRatingComponent onStarClick={onStarClick} />
    </>
  );
}
export default Search;
