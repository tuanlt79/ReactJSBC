import React, { Component } from "react";
//kết nối react component với redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  render() {
    console.log(this.props.gioHang, "gioHang");
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Số Lượng</th>
              <th>Giá</th>
              <th>Thành Tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.gioHang.map((spGH, index) => {
              return (
                <tr key={index}>
                  <td>{spGH.maSP}</td>
                  <td>{spGH.tenSP}</td>
                  <td>{spGH.soLuong}</td>
                  <td>{spGH.gia}</td>
                  <td>{spGH.gia * spGH.soLuong}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
//hàm chuyển state trên redux trở thành props của component
const mapStateToProps = (state) => {
  //tạo props từ state redux
  return {
    gioHang: state.gioHangReducer.gioHang,
  };
};
//kết nối giữa component và redux
export default connect(mapStateToProps)(GioHangRedux);
