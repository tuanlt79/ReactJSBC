import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { sanPham,changePhone, themGH } = this.props;
    return (
      <div>
        <div className="card text-white bg-dark">
          <img
            className="card-img-top"
            style={{ height: "348px" }}
            src={sanPham.hinhAnh}
          />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">Giá: {sanPham.giaBan}</p>
            <button className="btn btn-success" onClick={() => {
                changePhone(sanPham)
            }}>Xem Chi Tiết</button>
            <button className="btn btn-danger ml-2" onClick={() =>themGH(sanPham)}>Thêm Giỏ Hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
