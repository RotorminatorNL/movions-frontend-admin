import React, {Component} from "react";
import "../../assets/css/Companies.css";
import getCompanies from "../../api/endpoints/GetCompanies.js";
import { NavLink } from "react-router-dom";

export default class Companies extends Component {
    constructor(props){
        super(props);

        this.state = {
            companies: []
        };
    }

    async componentDidMount() {
        this.setState({companies: await getCompanies()});
    }

    render() {
        return (
            <div>
                <div className="sub-nav-container border-radius flex-align-items-center flex-row flex-justify-content-space-between p-1">
                    <input className="searchbar border-radius" placeholder="Company..." />
                    <div className="create-button border-radius flex-align-items-center flex-justify-content-center text-larger">
                        Create new company
                    </div>
                </div>
                <div className="companies full-width blurry-background-dark border-radius mt-6">
                    <div className="header flex-row">
                        <h2>ID</h2>
                        <h2>Name</h2>
                        <h2>Type</h2>
                        <h2>Movies</h2>
                    </div>
                    <div className="rows">
                        {this.state.companies.length !== 0 ? this.state.companies.map((x, index) => 
                        (
                            <NavLink to={`/company/${x.id}`} className="row flex-row" key={index}>
                                <div>{x.id}</div>
                                <div>{x.name}</div>
                                <div>{x.type}</div>
                                <div>{x.movies !== null ? x.movies.length : 0}</div>
                            </NavLink>
                        )) : <div className="no-content">No content...</div>}
                    </div>
                </div>
            </div>
        );
    }
}