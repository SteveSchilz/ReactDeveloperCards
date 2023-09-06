import React from "react";
import ReactDom from "react-dom/client";
import developers from "./developers.js";

function Skill() {
  return (
    <div>
      <p>Skill1</p>
      <p>Skill1</p>
    </div>
  );
}

function Developer(props) {
  return (
    <div>
      <img src={props.devPhoto} alt="Developer"></img>
      <h2>{props.devName}</h2>
      <Skill />
    </div>
  );
}
/*
 * Convention: App (mut be first letter upper case )
 * Our body is a div enclosing a bunch of components
 */
function App() {
  return (
    <div className="container">
      <Developer devName="Steve Schilz" devPhoto="images/SteveSchilzCool.jpg" />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
