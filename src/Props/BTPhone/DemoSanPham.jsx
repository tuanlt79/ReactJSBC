import React, { Component } from "react";

export default class DemoSanPham extends Component {
  render() {
    let { sanPham, change, gioHang } = this.props;
    return (
      <div>
        <div className="card text-left">
          <img
            className="card-img-top"
            style={{ height: "348px" }}
            src={sanPham.hinhAnh}
            alt
          />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                change(sanPham);
                //   this.props.change(sanPham);
              }}
            >
              Xem Chi Tiet
            </button>
            <button
              className="btn btn-danger ml-2"
              onClick={() => {
                gioHang(sanPham);
              }}
            >
              Them Gio Hang
            </button>
          </div>
        </div>
      </div>
    );
  }
}
