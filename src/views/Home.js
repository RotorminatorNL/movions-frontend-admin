import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Home.css";
import ButtonInfo from "../components/ButtonInfo.js";
import getCompanies from "../api/endpoints/GetCompanies.js";
import getGenres from "../api/endpoints/GetGenres.js";
import getLanguages from "../api/endpoints/GetLanguages.js";
import getMovies from "../api/endpoints/GetMovies.js";
import getPersons from "../api/endpoints/GetPersons.js";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companies: [],
            genres: [],
            languages: [],
            movies: [],
            perons:[]
        };
    }

    async componentDidMount() {
        this.setState({companies: await getCompanies()});
        this.setState({genres: await getGenres()});
        this.setState({languages: await getLanguages()});
        this.setState({movies: await getMovies()});
        this.setState({perons: await getPersons()});
    }

    render() {
        return (
            <div className="full-width mt-4 mb-4">
                <div className="intro blurry-background-dark border-radius p-1 text-center">
                    <h1>Welcome to the CMS of Movions</h1>
                    <br />
                    <p className="font-size-larger">
                        Here you can manage the data of Movions. 
                        Everything you need in one place.
                    </p>
                    <br />
                    <p className="font-size-larger">
                        As you can see some information is already shown on the buttons below.
                    </p>
                    <p className="font-size-larger">
                        If you want to see more information you can either click on the button or use the navigation at the top.
                    </p>
                </div>
                <div className="buttons flex-wrap flex-justify-content-center">
                    <NavLink className="button blurry-background-dark text-center" to="/companies">
                        Companies
                        <hr />
                        <ButtonInfo data={this.state.companies}/>
                    </NavLink>
                    <NavLink className="button blurry-background-dark text-center" to="/genres">
                        Genres
                        <hr />
                        <ButtonInfo data={this.state.genres}/>
                    </NavLink>
                    <NavLink className="button blurry-background-dark text-center" to="/languages">
                        Languages
                        <hr />
                        <ButtonInfo data={this.state.languages}/>
                    </NavLink>
                    <NavLink className="button blurry-background-dark text-center" to="/movies">
                        Movies
                        <hr />
                        <ButtonInfo data={this.state.movies}/>
                    </NavLink>
                    <NavLink className="button blurry-background-dark text-center" to="/persons">
                        Persons
                        <hr />
                        <ButtonInfo data={this.state.perons}/>
                    </NavLink>
                </div>
            </div>
        );
    }
}