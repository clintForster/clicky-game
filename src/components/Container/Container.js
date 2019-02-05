import React, {Component} from "react";
import TileList from "../TileList/TileList.js";
import Title from "../Title/Title.js";
import Images from "../../images.json";
import "./style.css";


class Container extends Component {

    state = {
        Images,
        clicked: [],
        score: 0,
        topScore: 0,
        message: "",
        randomize: false
    };

    randomize = (array) => {
        for (let i = array.length-1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    handleClick = (id) => {
        const randomize = this.randomize(Images);
        this.setState({cards: randomize});

        if (this.state.score >= this.state.topScore) {
            this.setState({ topScore: this.state.topScore + 1});
        }

        if (this.state.clicked.includes(id)) {
            this.setState({score: 0, clicked: [], message: "iNcOrReCt, lOsEr. gAmEoVeR. cLiCk aN iMaGe tO tRy aGaIn.", randomize: true});
        } else if (this.state.score > this.state.topScore) {
            this.setState({
                clicked: this.state.clicked.concat([id]),
                score: this.state.score + 1,
                message: "Correct!",
                randomize: false,
                topScore: this.state.topScore + 1
            });
        } else {
            this.setState({
                clicked: this.state.clicked.concat([id]),
                score: this.state.score + 1,
                message: "Correct!",
                randomize: false
            });
        }

        if (randomize) {
            this.randomize(Images);

        }
    }

    

    render() {
        return (
            <div>
            <Title>
                    90's Nickelodeon Memory Game
                </Title>
                <h2 class="score">Score: {this.state.score}</h2>
                <h2 class="score">Top Score: {this.state.topScore}</h2>
                <strong class="score">{this.state.message}</strong>
                <div className="container">
                    {this.state.Images.map(image => (
                    <TileList
                        handleClick= {this.handleClick}
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

export default Container;