import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Application } from "./Components/Application/Application";

ReactDOM.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>,
  document.getElementById("root")
);
