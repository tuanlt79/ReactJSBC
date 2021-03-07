import React, { Component } from "react";
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
  render() {
    let { stateGame } = this.props;
    let cssLuaChon = stateGame.banChon == "TÀI" ? "red" : "back";
    return (
      <div className="container text-center">
        <div className="display-4">
          Ban Chon:
          <span style={{ color: `${cssLuaChon}` }} className="">
            {stateGame.banChon}
          </span>
        </div>
        <div className="display-4">
          Số Bàn Thắng:
          <span className="text-warning">{stateGame.soBanThang}</span>
        </div>
        <div className="display-4">
          Số Bàn Chơi:
          <span className="text-primary">{stateGame.tongSoBanChoi}</span>
        </div>
        <div className="display-4">
          <button
            onClick={() => {
              // tao ra 1 action
              const action = {
                type: "PLAY_GAME",
              };
              this.props.dispatch(action);
            }}
            className=" btn bg-success pt-5"
          >
            <span className="bg-success w-25 display-4">Play Game</span>
          </button>
        </div>
      </div>
    );
  }
}
//viet ham lay gia tri tu store redux ve bien thanh props cua component
const mapStateToProps = (state) => {
  return {
    stateGame: state.baiTapGameReducer,
    // banChon:state.baiTapGameReducer.banChon
  };
};
export default connect(mapStateToProps)(KetQuaTroChoi);
