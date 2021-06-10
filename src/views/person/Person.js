import React, {Component} from "react";
import getPerson from "../../api/endpoints/GetPerson.js";
import { withRouter } from "react-router";

class Person extends Component {
    constructor(props){
        super(props);

        this.state = {
            person: []
        };
    }

    async componentDidMount() {
        this.setState({person: await getPerson()});
    }

    render() {
        return (
            <div>
                Person
            </div>
        );
    }
}

export default withRouter(Person);