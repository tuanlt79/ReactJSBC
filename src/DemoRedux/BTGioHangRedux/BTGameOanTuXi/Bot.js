import React, { Component } from "react";
import { connect } from "react-redux";
class Bot extends Component {
  render() {
    return (
      <div className="text-center player__Game">
        <div className="playerThink">
          <img src={this.props.playerBot.hinhAnh} alt="" width={80} />
        </div>
        <div className="speech-bubble"></div>
        <img src="./img/playerComputer.png" alt="" width={200} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  playerBot: state.BTGameOanTuXiReducer.playerBot,
});
export default connect(mapStateToProps)(Bot);
