import React from "react";
import "../styles/Character.css";
import ricks from "../images/images.json"


function Character() {
    const rickMapping =  ricks.map((image, index) => {
        return(

            <div className="d-inline flex-row flex-wrap mx-1 " key = {index}>
                <img
                    src = {image.path}
                    alt = {image.name}
                    style = {{width: 150, height: 150, marginTop: 10}} 
                    className = "img-thumbnail img-fluid"
                    /> 
            </div>
        )
    })

    return (
        <div className = "">
            {rickMapping}
        </div>
    );
};


export default Character;
