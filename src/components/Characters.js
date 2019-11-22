import React  from "react";
import "../styles/Character.css";

function Characters (props) {
       
    return(
        <div className="d-inline flex-row flex-wrap mx-1 " >
            <img
                src = {props.src}
                id = {props.id}
                alt = {props.name}
                name = {props.name}
                className = "img-thumbnail img-fluid"
                style = {{width:150, height: 150, marginTop: 10, }}
                onClick= {props.onClick}
                /> 
        </div>
    )
};

export default Characters;
