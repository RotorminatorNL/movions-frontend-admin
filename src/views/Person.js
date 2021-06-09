import React, {Component} from "react";
import "../assets/css/Person.css";
import getPersons from "../api/endpoints/GetPersons.js";

export default class Person extends Component {
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
            <div className="persons full-width blurry-background-white border-radius">
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
                        <div className="row flex-row" key={index}>
                            <div>{x.id}</div>
                            <div>{x.birthDate}</div>
                            <div>{x.birthPlace}</div>
                            <div>{x.firstName}</div>
                            <div>{x.LastName}</div>
                        </div>
                    )) : <div className="no-content">No content...</div>}
                </div>
            </div>
        );
    }
}