import React, {Component} from "react";
import "../assets/css/Genre.css";
import getGenres from "../api/endpoints/GetGenres.js";

export default class Genre extends Component {
    constructor(props){
        super(props);

        this.state = {
            genres: []
        };
    }

    async componentDidMount() {
        this.setState({genres: await getGenres()});
    }

    render() {
        return (
            <div>
                <div className="genres full-width blurry-background-white border-radius mt-6">
                    <div className="header flex-row">
                        <h2>ID</h2>
                        <h2>Name</h2>
                        <h2>Movies</h2>
                    </div>
                    <div className="rows">
                        {this.state.genres.length !== 0 ? this.state.genres.map((x, index) => 
                        (
                            <div className="row flex-row" key={index}>
                                <div>{x.id}</div>
                                <div>{x.name}</div>
                                <div>{x.movies !== null ? x.movies.length : 0}</div>
                            </div>
                        )) : <div className="no-content">No content...</div>}
                    </div>
                </div>
                <div className="sub-nav-container border-radius flex-align-items-center flex-row flex-justify-content-space-between p-1">
                    <input className="searchbar border-radius" placeholder="Genre..." />
                    <div className="create-button border-radius flex-align-items-center flex-justify-content-center text-larger">
                        Create new genre
                    </div>
                </div>
            </div>
        );
    }
}