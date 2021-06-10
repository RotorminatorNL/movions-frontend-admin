import React, {Component} from "react";
import getMovie from "../../api/endpoints/GetMovie.js";
import { withRouter } from "react-router";

class Movie extends Component {
    constructor(props){
        super(props);

        this.state = {
            movie: []
        };
    }

    async componentDidMount() {
        this.setState({movie: await getMovie()});
    }

    render() {
        return (
            <div>
                Movie
            </div>
        );
    }
}

export default withRouter(Movie);