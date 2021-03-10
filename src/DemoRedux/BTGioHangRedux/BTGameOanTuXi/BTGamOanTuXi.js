import React, { Component } from "react";
import Bot from "./Bot";
import "./BTGameOanTuXi.css";
import KetQua from "./KetQua";
import Player from "./Player";
export default class BTGamOanTuXi extends Component {
  render() {
    return (
      <div className="bgGame">
        <div className="container">
          <div className="row text-center mt-5">
            <div className="col-4">
              <Player />
            </div>
            <div className="col-4">
              <KetQua />
              <div className="btn btn-success">Play Game</div>
            </div>
            <div className="col-4">
              <Bot />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
