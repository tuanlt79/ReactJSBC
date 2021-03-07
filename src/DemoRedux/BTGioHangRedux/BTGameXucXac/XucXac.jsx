import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {
  render() {
    let { xucXac } = this.props;
    let renderXucXac = () => {
      return xucXac.mangXucXac.map((item, index) => {
        return (
          <div key={index} className="">
            <img src={item.hinhAnh} width="50" />
          </div>
        );
      });
    };
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <button
              onClick={() => {
                this.props.chonTaiXiu("TÀI");
              }}
              style={{ border: "none" }}
              className="bg-danger"
            >
              <div
                className="p-5 bg-danger text-white w-100 h-100"
                style={{ fontSize: 50 }}
              >
                TÀI
              </div>
            </button>
          </div>
          <div className="col-4 row">
            {renderXucXac()}
            {/* <img src="{this.props.mangXucXac[0].hinhAnh}" width="50" />
            <img src="./img/1.png" width="50" />
            <img src="./img/1.png" width="50" /> */}
          </div>
          <div className="col-4">
            <button
              onClick={() => {
                this.props.chonTaiXiu("XỈU");
              }}
              style={{ border: "none" }}
              className="bg-dark"
            >
              <div
                className="p-5 bg-dark text-white w-100 h-100"
                style={{ fontSize: 50 }}
              >
                XỈU
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  xucXac: state.baiTapGameReducer,
}); // return về object sẽ thay bằng {}=({})

const mapDispatchToProps = (dispatch) => {
  return {
    chonTaiXiu: (giaTri) => {
      // console.log("giatri", giaTri);
      //Gui len Redux
      const action = {
        type: "CHON_TAI_XIU",
        giaTri,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
