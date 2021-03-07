import React, { Component } from "react";
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";
import "./BaiTapGameXucXac.css";
import { connect } from "react-redux";
class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div className=" bgGameXucXac">
        <h1 className="text-center">Bai Tap Game Xuc Xac</h1>
        <XucXac />
        <div className="text-center display-3 text-warning">
          {this.props.tongDiem}:{this.props.ketQua}
        </div>
        <KetQuaTroChoi />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //lấy mảng xúc xắc từ reducer về
  let mangXucXac = state.baiTapGameReducer.mangXucXac;
  //tính tổng điểm từ mảng xúc xắc
  let tongDiem = mangXucXac.reduce((td, xucXac, index) => {
    return (td += xucXac.diem);
  }, 0);
  //lay tong diem tao ra ket qua
  let ketQua = tongDiem > 11 ? "Tai" : "Xiu";
  //props tao ra tu ham mapStateToProps
  return {
    tongDiem: tongDiem,
    ketQua: ketQua,
  };
};
export default connect(mapStateToProps)(BaiTapGameXucXac);
