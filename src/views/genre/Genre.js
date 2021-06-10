import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import getGenre from "../../api/endpoints/GetGenre.js";

class Genre extends Component {
    constructor(props){
        super(props);
        this.state = {
            genre: []
        };
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        this.setState({genre: await getGenre(id)});
    }

    render() {
        return (
            <div>
                Genre
            </div>
        );
    }
}

export default withRouter(Genre);