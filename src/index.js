import React from "react";
import ReactDom from "react-dom/client";
import { developers } from "./developers.js";

function Skill(props) {
  console.log({ props });
  return (
    <p>
      <span>
        <b>Skills: </b>
      </span>
      {props.skills.map((item) => {
        return <span>{item} </span>;
      })}
    </p>
  );
}

function Developer(props) {
  return (
    <div>
      <img src={props.devPhoto} alt="Developer"></img>
      <h2>{props.devName}</h2>
      <p>{props.devIntro}</p>
      <Skill skills={props.devSkills} />
    </div>
  );
}
/*
 * Convention: App (mut be first letter upper case )
 * Our body is a div enclosing a bunch of components
 */
function App() {
  console.log(developers);
  return (
    <div className="container">
      <Developer {...developers[0]} />
      <Developer {...developers[1]} />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
