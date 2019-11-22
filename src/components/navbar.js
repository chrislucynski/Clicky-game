import React from "react";
import "../styles/Navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar justify-content-between">
      <div className="mx-1 d-flex justify-content-center">
        <ul className="row ">
          <li className="col">
            <a href="/">Clicky Game!</a>
          </li>
          <li className="col">Click the pictures to get started!</li>
          <li className="col">
            Score: <span id="current-score" score={props.score}>{props.score}</span> | 
            Top Score: <span id="top-score" highscore={props.highscore}>{props.highscore}</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
