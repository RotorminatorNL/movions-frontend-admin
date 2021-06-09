import React, {Component} from "react";

export default class buttonInfo extends Component {
    render() {
        return (
            this.props.data.length !== 0 ? 
            this.props.data.slice(0, 3).map((x, index) => 
                (
                    <div>
                        <div className="info text-left flex-row" key={index}>
                            <div className="amount">
                                {++index}
                            </div>
                            <div className="title">
                                {x.name}
                            </div>
                        </div>
                        {(this.props.data.length > 3 && index === 3) ? <div className="info text-left">...</div> : null}
                    </div>
                ))
            : <div className="info text-left">No content...</div>
        );
    }
}