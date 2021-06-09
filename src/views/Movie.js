import React, {Component} from "react";
import "../assets/css/Movie.css";
import getMovies from "../api/endpoints/getMovies.js";

export default class Movie extends Component {
    constructor(props){
        super(props);

        this.state = {
            movies: []
        };
    }

    async componentDidMount() {
        this.setState({movies: await getMovies()});
    }

    render() {
        return (
            <div className="movies full-width blurry-background-white border-radius">
                <div className="header flex-row">
                    <h2>ID</h2>
                    <h2>Description</h2>
                    <h2>Length</h2>
                    <h2>Language</h2>
                    <h2>Name</h2>
                    <h2>Release date</h2>
                </div>
                <div className="rows">
                    {this.state.movies.length !== 0 ? this.state.movies.map((x, index) => 
                    (
                        <div className="row flex-row" key={index}>
                            <div>{x.id}</div>
                            <div>{x.description}</div>
                            <div>{x.length}</div>
                            <div>{x.language.name}</div>
                            <div>{x.name}</div>
                            <div>{x.releaseDate}</div>
                        </div>
                    )) : <div className="no-content">No content...</div>}
                </div>
            </div>
        );
    }
}