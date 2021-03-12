import React, { Component } from "react";
import Bot from "./Bot";
import "./BTGameOanTuXi.css";
import KetQua from "./KetQua";
import Player from "./Player";
import { connect } from "react-redux";
class BTGamOanTuXi extends Component {
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
              <div
                className="btn btn-success"
                onClick={() => {
                  this.props.playGame();
                }}
              >
                Play Game
              </div>
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
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      const action = {
        type: "PLAY_GAME_OTX",
      };
      dispatch(action);
    },
    ketQuaGame: () => {
      const action = {
        type: "KET_QUA_GAME",
      };
    },
  };
};
export default connect(null, mapDispatchToProps)(BTGamOanTuXi);
