import React, {Component} from "react";
import "../../assets/css/Persons.css";
import getPersons from "../../api/endpoints/GetPersons.js";
import { NavLink } from "react-router-dom";

export default class Persons extends Component {
    constructor(props){
        super(props);

        this.state = {
            persons: []
        };
    }

    async componentDidMount() {
        this.setState({persons: await getPersons()});
    }

    render() {
        return (
            <div>
                <div className="sub-nav-container border-radius flex-align-items-center flex-row flex-justify-content-space-between p-1">
                    <input className="searchbar border-radius" placeholder="Person..." />
                    <div className="create-button border-radius flex-align-items-center flex-justify-content-center text-larger">
                        Create new person
                    </div>
                </div>
                <div className="persons full-width blurry-background-dark border-radius mt-6">
                    <div className="header flex-row">
                        <h2>ID</h2>
                        <h2>Birth date</h2>
                        <h2>Birthplace</h2>
                        <h2>First name</h2>
                        <h2>Last name</h2>
                    </div>
                    <div className="rows">
                        {this.state.persons.length !== 0 ? this.state.persons.map((x, index) => 
                        (
                            <NavLink to={`/person/${x.id}`} className="row flex-row" key={index}>
                                <div>{x.id}</div>
                                <div>{x.birthDate}</div>
                                <div>{x.birthPlace}</div>
                                <div>{x.firstName}</div>
                                <div>{x.LastName}</div>
                            </NavLink>
                        )) : <div className="no-content">No content...</div>}
                    </div>
                </div>
            </div>
        );
    }
}