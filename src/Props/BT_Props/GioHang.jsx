import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    let { gioHang, handleGH, tangGiamGH } = this.props;
    return (
      <div>
        <div className="conatainer">
          <table className="table">
            <thead>
              <tr>
                <th>Mã SP</th>
                <th>Hình Ảnh</th>
                <th>Tên SP</th>
                <th>Số Lượng</th>
                <th>Đơn Giá</th>
                <th>Thành Tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {gioHang.map((spGH, index) => {
                return (
                  <tr key={index}>
                    <td>{spGH.maSP}</td>
                    <td>
                      <img style={{ height: "50px" }} src={spGH.hinhAnh} />
                    </td>
                    <td>{spGH.tenSP}</td>

                    <td>
                      <button
                        className="btn mr-1"
                        onClick={() => {
                          tangGiamGH(spGH.maSP, -1);
                        }}
                      >
                        <i className="fa fa-angle-down"></i>
                      </button>
                      {spGH.soLuong}
                      <button
                        className="btn ml-1"
                        onClick={() => {
                          tangGiamGH(spGH.maSP, 1);
                        }}
                      >
                        <i className="fa fa-angle-up"></i>
                      </button>
                    </td>

                    <td>{spGH.giaBan.toLocaleString()}</td>
                    <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleGH(spGH);
                      }}
                    >
                      Xóa
                    </button>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5"></td>
                <td>Tổng Tiền</td>
                <td>{this.tinhTongTien()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
  tinhTongTien = () => {
    let tongTien = this.props.gioHang.reduce((tongTien, spGH, index) => {
      tongTien += spGH.soLuong * spGH.giaBan;
      return tongTien;
    }, 0);
    return tongTien.toLocaleString();
  };
}
