import React from "react";
import "../styles/Header.css";
import galaxy from "../galaxy.jpg"

function Header(props) {
    return (
        <header className="my-5">
            <div className="header-container">
                <img src= {galaxy} alt='galaxy'/>
                <div className="text-container">
                    <h1 className="text-center">Clicky Game!</h1>
                    <p className="lead text-center">This is a game of memory.</p> 
                    <p className="lead text-center"> <strong>Objective:</strong> select each photo without repeating any.</p>
                    <br></br>
                    
                    <h1 className='' message={props.message}>{props.message}</h1>
                </div>

            </div>
        </header>
    );
  }
  
  export default Header;