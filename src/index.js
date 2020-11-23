import { React } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Annonce from "./components/Annonce";
import { List } from "./const";
let list = List;
ReactDOM.render(
  <Router>
    <Route
      path="/"
      exact
      render={(props) => (
        <App
          {...props}
          setUpdatedList={(updatedList) => {
            list = updatedList;
          }}
        />
      )}
    />
    <Route
      path="/annonce/:url"
      render={(props) => <Annonce {...props} List={list} />}
    />
  </Router>,
  document.getElementById("root")
);
