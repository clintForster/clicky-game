import React from "react";
import "./style.css";

function TileList(props) {
    console.log(props.src);
    return (
        <div className="card">
            <div className="img-container">
                <img className="img-thumbnail img-responsive" alt={props.id} src={props.src} onClick={() => props.handleClick(props.id)}/>
            </div>
        </div>
    );
}

export default TileList;
