import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  render() {
    let { oanTuXi } = this.props;
    let renderMenu = () => {
      return oanTuXi.map((item, index) => {
        let border = {};
        if (item.chonMenu) {
          border = { border: "3px solid orange " };
        }
        return (
          <div className="col-4" key={index}>
            <button style={border}>
              <img src={item.hinhAnh} alt="" width={50} />
            </button>
          </div>
        );
      });
    };
    return (
      <div className="text-center player__Game">
        <div className="playerThink">
          <img
            src={oanTuXi.find((item) => item.chonMenu === true).hinhAnh}
            alt=""
            width={80}
          />
        </div>

        <div className="speech-bubble"></div>
        <img src="./img/player.png" alt="" width={200} />
        <div className="row">{renderMenu()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  oanTuXi: state.BTGameOanTuXiReducer.mangOanTuXi,
});

export default connect(mapStateToProps)(Player);
