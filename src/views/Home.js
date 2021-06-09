import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import GetCompanies from "../api/endpoints/GetCompanies";
import GetGenres from "../api/endpoints/GetGenres";
import GetLanguages from "../api/endpoints/GetLanguages";
import GetMovies from "../api/endpoints/GetMovies";
import GetPersons from "../api/endpoints/GetPersons";
import "../assets/css/Card.css";
import "../assets/css/Home.css";
import "../assets/css/BasicCssClasses.css";
import ButtonInfo from "../components/ButtonInfo";

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
        this.setState({companies: await GetCompanies()});
        this.setState({genres: await GetGenres()});
        this.setState({languages: await GetLanguages()});
        this.setState({movies: await GetMovies()});
        this.setState({perons: await GetPersons()});
    }

    render() {
        return (
            <div className="full-width mt-4">
                <div className="blurry-background-white border-radius p-1 text-center">
                    <h1>Welcome to the CMD of Movions</h1>
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
                    <NavLink className="button blurry-background-white text-center" exact to="/company">
                        Company
                        <hr />
                        <ButtonInfo data={this.state.companies}/>
                    </NavLink>
                    <NavLink className="button blurry-background-white text-center" exact to="/genre">
                        Genre
                        <hr />
                        <ButtonInfo data={this.state.genres}/>
                    </NavLink>
                    <NavLink className="button blurry-background-white text-center" exact to="/language">
                        Language
                        <hr />
                        <ButtonInfo data={this.state.languages}/>
                    </NavLink>
                    <NavLink className="button blurry-background-white text-center" exact to="/movie">
                        Movie
                        <hr />
                        <ButtonInfo data={this.state.movies}/>
                    </NavLink>
                    <NavLink className="button blurry-background-white text-center" exact to="/person">
                        Person
                        <hr />
                        <ButtonInfo data={this.state.perons}/>
                    </NavLink>
                </div>
            </div>
        );
    }
}