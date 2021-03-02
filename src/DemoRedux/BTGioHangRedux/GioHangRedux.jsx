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
            {this.props.gioHang.map((spGioHang, index) => {
              return (
                <tr key={index}>
                  <td>{spGioHang.maSP}</td>
                  <td>{spGioHang.tenSP}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.props.thayDoiSoLuong(spGioHang.maSP, -1);
                      }}
                    >
                      -
                    </button>
                    {spGioHang.soLuong}
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.props.thayDoiSoLuong(spGioHang.maSP, 1);
                      }}
                    >
                      +
                    </button>
                  </td>
                  <td>{spGioHang.giaBan}</td>
                  <td>{spGioHang.giaBan * spGioHang.soLuong}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.xoaSanPham(spGioHang.maSP);
                      }}
                    >
                      Xoa
                    </button>
                  </td>
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
const mapDispatchToProps = (dispatch) => {
  return {
    thayDoiSoLuong: (maSP, soLuong) => {
      // console.log("ob");
      const action = {
        type: "THAY_DOI_SO_LUONG",
        maSP: maSP,
        soLuong: soLuong,
      };
      //đưa action lên reducer
      dispatch(action);
    },
    xoaSanPham: (maSP) => {
      //Tạo action
      const action = {
        type: "XOA_SAN_PHAM",
        maSP: maSP,
      };
      // đưa dữ liệu lên reducer
      dispatch(action);
    },
  };
};
//kết nối giữa component và redux
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
