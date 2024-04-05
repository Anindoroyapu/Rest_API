import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <div className="row">
            <div className="col ">
              1 of 3<div className="col-8">2 of 3 (wider)</div>
            </div>
            <div className="col-8">2 of 3 (wider)</div>
            <div className="col">3 of 3</div>
          </div>
          <div className="row">
            <div className="col">1 of 3</div>
            <div className="col-5">2 of 3 (wider)</div>
            <div className="col">3 of 3</div>
          </div>
        </div>
      </div>
    );
  }
}
