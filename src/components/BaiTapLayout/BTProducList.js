import React, { Component } from "react";
import BTProductItem from "./BTProductItem";

export default class BTProducList extends Component {
  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <div className="col-3">
              <BTProductItem></BTProductItem>
            </div>
            <div className="col-3">
              <BTProductItem></BTProductItem>
            </div>
            <div className="col-3">
              <BTProductItem></BTProductItem>
            </div>
            <div className="col-3">
              <BTProductItem></BTProductItem>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
