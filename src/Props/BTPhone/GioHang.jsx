import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    let { gioHang, xoaGH } = this.props;

    return (
      <div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Ma SP</th>
                <th>Ten SP</th>
                <th>Hinh Anh</th>
                <th>Gia SP</th>
                <th>So Luong</th>
                <th>Thanh Tien</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {gioHang.map((spGH, index) => {
                return (
                  <tr key={index}>
                    <th>{spGH.maSP}</th>
                    <th>{spGH.tenSP}</th>
                    <th>
                      <img style={{ height: "50px" }} src={spGH.hinhAnh} />
                    </th>
                    <th>{spGH.giaSP}</th>
                    <th>{spGH.soLuong}</th>
                    <th>{spGH.giaSP * spGH.soLuong}</th>
                    <th>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                            
                         xoaGH(spGH)
                        }}
                      >
                        Xoa
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
