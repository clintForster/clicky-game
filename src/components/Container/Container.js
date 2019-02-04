import React, {Component} from "react";
import TileList from "../TileList/TileList.js";
import Title from "../Title/Title.js";
import Images from "../../images.json";
import "./style.css";


class Tile extends Component {

    state = {
        Images,
        clicked: false
    };


    handleClick = () => {
        this.setState({ clicked: true });
    };

    render() {
        return (
            <div>
            <Title>
                    90's Nickelodeon Memory Game
                </Title>
            <div className="container">
                {this.state.Images.map(image => (
                   <TileList onClick={this.handleClick}
                     id={image.id}
                     key={image.id}
                     src={image.image}
                   /> 
                ))}
            </div>
            </div>
        );
    }

}

export default Tile;