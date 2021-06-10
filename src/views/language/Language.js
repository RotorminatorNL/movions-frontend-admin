import React, {Component} from "react";
import getLanguage from "../../api/endpoints/GetLanguage.js";
import { withRouter } from "react-router";

class Language extends Component {
    constructor(props){
        super(props);

        this.state = {
            language: []
        };
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        this.setState({language: await getLanguage(id)});
    }

    render() {
        return (
            <div>
                Language
            </div>
        );
    }
}

export default withRouter(Language);