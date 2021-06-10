import React, {Component} from "react";

export default class buttonInfo extends Component {
    render() {
        return (
            this.props.data.length !== 0 ? 
            this.props.data.slice(0, 3).map((x, index) => 
                (
                    <div key={index}>
                        <div className="info text-left flex-row">
                            <div className="amount">
                                {++index}
                            </div>
                            <div className="title">
                                {x.name !== null ? x.name : `${x.firstName} ${x.lastName}`}
                            </div>
                        </div>
                        {(this.props.data.length > 3 && index === 3) ? <div className="info text-left">...</div> : null}
                    </div>
                ))
            : <div className="info text-left">No content...</div>
        );
    }
}