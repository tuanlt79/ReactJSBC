import React, { Component } from "react";
import { connect } from "react-redux";
class KetQua extends Component {
  render() {
    return (
      <div className="h1">
        <div>
          <span className="text-danger">{this.props.ketQua}</span>
        </div>
        <div>
          <span className="text-success">Số Bàn Thắng: </span>
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div>
          <span className="text-success">Số Bàn Chơi: </span>
          <span className="text-warning"> {this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ketQua: state.BTGameOanTuXiReducer.ketQua,
  soBanChoi: state.BTGameOanTuXiReducer.soBanChoi,
  soBanThang: state.BTGameOanTuXiReducer.soBanThang,
});
export default connect(mapStateToProps)(KetQua);
