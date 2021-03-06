import React, {Component} from "react";
import "../../assets/css/Movies.css";
import getMovies from "../../api/endpoints/GetMovies.js";
import { NavLink } from "react-router-dom";

export default class Movies extends Component {
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
            <div>
                <div className="sub-nav-container border-radius flex-align-items-center flex-row flex-justify-content-space-between p-1">
                    <input className="searchbar border-radius" placeholder="Movie..." />
                    <div className="create-button border-radius flex-align-items-center flex-justify-content-center text-larger">
                        Create new movie
                    </div>
                </div>
                <div className="movies full-width blurry-background-dark border-radius mt-6">
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
                            <NavLink to={`/movie/${x.id}`} className="row flex-row" key={index}>
                                <div>{x.id}</div>
                                <div>{x.description}</div>
                                <div>{x.length}</div>
                                <div>{x.language.name}</div>
                                <div>{x.name}</div>
                                <div>{x.releaseDate}</div>
                            </NavLink>
                        )) : <div className="no-content">No content...</div>}
                    </div>
                </div>
            </div>
        );
    }
}