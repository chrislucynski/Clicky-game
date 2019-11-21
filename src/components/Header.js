import React from "react";
import "../styles/Header.css";
import galaxy from "../images/images.json"

function Header() {
    console.log(galaxy[16].path)
    return (
        <header className="my-5">
            <div className="header-container">
                <img src= {galaxy[16].path} alt='galaxy'/>
                <div className="text-container">
                    <h1 className="text-center">Clicky Game!</h1>
                    <p className="lead text-center">This is a game of memory.</p> 
                    <p className="lead text-center"> <strong>Objective:</strong> select each photo without repeating any.</p>
                </div>

            </div>
        </header>
    );
  }
  
  export default Header;