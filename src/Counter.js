import React, { Component } from "react";

class Counter extends Component {
    render() {
        return (
            <div className="container">
                <div className="buttons" onClick={this.props.decreaseCount}>-</div>
                <span>{this.props.countValue}</span>
                <div className="buttons" onClick={this.props.increaseCount}>+</div>
            </div>
        );
    }
}

export default Counter;