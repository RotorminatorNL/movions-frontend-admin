import React, {Component} from "react";
import "../../assets/css/Genres.css";
import getGenres from "../../api/endpoints/GetGenres.js";
import { NavLink } from "react-router-dom";

export default class Genres extends Component {
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
                <div className="sub-nav-container border-radius flex-align-items-center flex-row flex-justify-content-space-between p-1">
                    <input className="searchbar border-radius" placeholder="Genre..." />
                    <div className="create-button border-radius flex-align-items-center flex-justify-content-center text-larger">
                        Create new genre
                    </div>
                </div>
                <div className="genres full-width blurry-background-dark border-radius mt-6">
                    <div className="header flex-row">
                        <h2>ID</h2>
                        <h2>Name</h2>
                        <h2>Movies</h2>
                    </div>
                    <div className="rows">
                        {this.state.genres.length !== 0 ? this.state.genres.map((x, index) => 
                        (
                            <NavLink to={`/genre/${x.id}`} className="row flex-row" key={index}>
                                <div>{x.id}</div>
                                <div>{x.name}</div>
                                <div>{x.movies !== null ? x.movies.length : 0}</div>
                            </NavLink>
                        )) : <div className="no-content">No content...</div>}
                    </div>
                </div>
            </div>
        );
    }
}