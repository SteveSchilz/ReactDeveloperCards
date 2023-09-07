import React from "react";
import ReactDom from "react-dom/client";
import { developers } from "./developers.js";
import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
 * Convention: App (mut be first letter upper case )
 * Our body is a div enclosing a bunch of components
 */
function App() {
  console.log(developers);
  return (
    <div className="App">
      <Developer {...developers[0]} />
      <Developer {...developers[1]} />
    </div>
  );
}

function Developer(props) {
  return (
    <div className="card">
      <img className="avatar" src={props.devPhoto} alt="Developer"></img>
      <header className="header">
        <h1>{props.devName}</h1>
      </header>
      <p>{props.devIntro}</p>
      <Skills skills={props.devSkills} />
    </div>
  );
}

function RandomColor() {
  var randomColor =
    "#" + (0x707070 && Math.floor(Math.random() * 0xffffff)).toString(16);
  return randomColor;
}

// Generates a random emoji between &#127800; and &#127849
function RandomEmoji() {
  var num = 127800 + Math.floor(Math.random() * 50);
  return <span> {String.fromCodePoint(num)} </span>;
}

function Skills(props) {
  console.log({ props });
  var i = -1;
  return (
    <div>
      <span>
        <b>Skills:</b>
      </span>
      <ul className="skill-list">
        {props.skills.map((item) => {
          i = i + 1;
          return (
            <li
              key={i.toString()}
              className="pill"
              style={{ backgroundColor: RandomColor() }}
            >
              {RandomEmoji()} {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
