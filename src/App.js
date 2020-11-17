import React, { useState } from "react";
import "./App.css";
import Adding from "./components/Adding";
import MovieList from "./components/MovieList";
import Search from "./components/search";
function App() {
  const [filtrer, setFiltrer] = useState({ text: "", rate: "0" });
  const [List, setList] = useState([
    {
      image:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7AD64AC139AA4C5617BD8E05054C43DD8EB08A84CDCDD95BB6CD833807B149C3",
      Title: "Beauty and the Beast",
      date: "2017",
      description: "watch #BeautyAndTheBest 2009 Australian fantasy movie.",
      url: "https://www.youtube.com/watch?v=yp8PHybyHsc",
      rate: "5",
    },
    {
      image: "https://i.ytimg.com/vi/ZcNFnb7t_Iw/maxresdefault.jpg",
      Title: "Ayden et le Dragon",
      date: "2019",
      description:
        "Ayden est une jeune orpheline qui va se lier d'amitié avec un Dragon qui n'est autre que celui du Père Noël.",
      url: "https://www.youtube.com/watch?v=ZcNFnb7t_Iw&t=7s",
      rate: "3",
    },
    {
      image: "https://s1.dmcdn.net/v/MvJJm1QfefOHAHdf3/x1080",
      Title: "Un Chien Milliardaire",
      date: "2017",
      description:
        "Owen, un jeune garçon intelligent, se prend d'affection pour un golden retriever... milliardaire ! ",
      url: "https://www.youtube.com/watch?v=viJqPCy_Sf8",
      rate: "2",
    },
    {
      image: "https://i.ytimg.com/vi/hABT1M321_c/maxresdefault.jpg",
      Title: "Félix et le Chasseur",
      date: "2017",
      description:
        "Un chasseur fou tente de capturer tous les animaux de la savane pour satisfaire les désir d'un milliardaire excentrique...",
      url: "https://www.youtube.com/watch?v=hABT1M321_c",
      rate: "5",
    },
    {
      image: "https://i.ytimg.com/vi/zIMsPkLZW8g/maxresdefault.jpg",
      Title: "ROBOREX - Le chien du Futur",
      date: "2017",
      description:
        "Quand un chien robot du futur apparaît dans leur arrière-cour pour les aider, James 11 ans et son golden retriever bien-aimé, Rex, apprennent que c'est à eux de sauver le monde! ",
      url: "https://www.youtube.com/watch?v=zIMsPkLZW8g&t=2s",
      rate: "2",
    },
    {
      image: "https://fr.web.img5.acsta.net/pictures/14/06/02/10/15/187865.jpg",
      Title: "Les Aventuriers du Médaillon Perdu",
      date: "2018",
      description:
        "Billy et Allie, deux ados, tombent sur un artefact leur permettant de voyager dans le temps !",
      url: "https://www.youtube.com/watch?v=tjzaJzeTT2Y&t=2s",
      rate: "1",
    },
    {
      image:
        "https://i.ytimg.com/vi/fAy6iiPVz5k/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCJTj3_L9V36Xqdqm1ZusJ6wo2HfA",
      Title: "La Championne",
      date: "2020",
      description:
        "Une ancienne championne de rodéo devenue mère de famille, retourne dans l'écurie de son enfance et fait la rencontre d'un charmant entraîneur.",
      url: "https://www.youtube.com/watch?v=fAy6iiPVz5k&t=4s",
      rate: "2",
    },
    {
      image: "https://i.ytimg.com/vi/j4VXytCXC3k/maxresdefault.jpg",
      Title: "Le Père Noel a Disparu !",
      date: "2017",
      description:
        "Le père Noel a tout oublié ! Son nom, son métier et la liste des cadeaux !  ",
      url: "https://www.youtube.com/watch?v=j4VXytCXC3k&t=1s",
      rate: "2",
    },
    {
      image: "https://i.ytimg.com/vi/bxTlRp332ok/maxresdefault.jpg",
      Title: "Professeur Rikiki",
      date: "2020",
      description:
        "C'est le premier jour d'école et, déjà, un gros probleme : un élève a rétréci l'institutrice ! ",
      url: "https://www.youtube.com/watch?v=bxTlRp332ok&t=14s",
      rate: "4",
    },
  ]);

  return (
    <div className="App">
      <Search filtrer={filtrer} setFiltrer={setFiltrer} />
      <br />
      <br />
      <Adding add={setList} list={List} />
      <br />
      <br />
      <MovieList
        List={List.filter(
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
