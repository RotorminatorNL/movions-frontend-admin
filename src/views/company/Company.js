import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import getCompany from "../../api/endpoints/GetCompany.js";

class Company extends Component {
    constructor(props){
        super(props);
        this.state = {
            company: []
        };
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        this.setState({company: await getCompany(id)});
    }

    render() {
        return (
            <div className="blurry-background-dark full-width">
                <div className="flex-row">
                    <h2>
                        ID
                    </h2>
                    <div>
                        {this.state.company.id}
                    </div>
                </div>
                <div className="flex-row">
                    <h2>
                        Name
                    </h2>
                    <div>
                        {this.state.company.name}
                    </div>
                </div>
                <div className="flex-row">
                    <h2>
                        Type
                    </h2>
                    <div>
                        {this.state.company.type}
                    </div>
                </div>
                <div className="flex-row">
                    <h2>
                        Movies
                    </h2>
                    <div>
                        {this.state.company.movies}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Company);