import React, { useState } from "react";
import "./App.css";
import Adding from "./components/Adding";
import MovieList from "./components/MovieList";
import Search from "./components/search";
import { List } from "./const";
function App(props) {
  const [filtrer, setFiltrer] = useState({ text: "", rate: "0" });
  const [list, setList] = useState(List);

  return (
    <div className="App">
      <Search filtrer={filtrer} setFiltrer={setFiltrer} />
      <br />
      <br />
      <Adding add={setList} list={list} setUpdatedList={props.setUpdatedList} />
      <br />
      <br />
      <MovieList
        List={list.filter(
          (e) =>
            e.Title.toLowerCase().includes(filtrer.text.toLowerCase()) &&
            e.rate >= filtrer.rate
        )}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
