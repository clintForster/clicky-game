import React from "react";
import "./style.css";

function TileList(props) {
    console.log(props.src);
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.id} src={props.src} />
            </div>
        </div>
    );
}

export default TileList;
