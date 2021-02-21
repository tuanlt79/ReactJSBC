import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { sanPham,changePhone } = this.props;
    return (
      <div>
        <div className="card text-white bg-primary">
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
          </div>
        </div>
      </div>
    );
  }
}
