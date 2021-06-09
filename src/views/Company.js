import React, {Component} from "react";
import "../assets/css/Company.css";
import getCompanies from "../api/endpoints/getCompanies";

export default class Company extends Component {
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
            <div className="companies full-width blurry-background-white border-radius">
                <div className="header flex-row">
                    <h2>ID</h2>
                    <h2>Name</h2>
                    <h2>Type</h2>
                    <h2>Movies</h2>
                </div>
                <div className="rows">
                    {this.state.companies.length !== 0 ? this.state.companies.map((x, index) => 
                    (
                        <div className="row flex-row" key={index}>
                            <div>{x.id}</div>
                            <div>{x.name}</div>
                            <div>{x.type}</div>
                            <div>{x.movies !== null ? x.movies.length : 0}</div>
                        </div>
                    )) : <div className="no-content">No content...</div>}
                </div>
            </div>
        );
    }
}