import React, { Component } from "react";
import style from "./DataBinding.module.css";

export default class DataBinding extends Component {
  sinhVien = { id: 1, ten: "Tuấn" };
  renderSinhVien = () => {
    //Binding phương thức thì phương thức đó phải trả về nội dung là số hoặc chuỗi hoặc 1 thẻ component bao phủ
    return (
      <div>
        id:{this.sinhVien.id} - ten: {this.sinhVien.ten}
      </div>
    );
  };
  render() {
    let title = "Hello";
    let sanPham = {
      ten: "Iphone",
      gia: 1000,
      hinhAnh: "https://picsum.photos/10/20",
    };

    return (
      <div>
        <p className={`text-center ${style.textGreen} ${style["txt-light"]}`}>
                àdsaf
        </p>
            <p style={{backgroundColor:'red',color:'white'}}>aaaa</p>
        {this.renderSinhVien()}
        <h1>Họ Tên: {this.sinhVien.ten}</h1>
        <p id="title">{title}</p>

        <div className="card text-white bg-primary">
          <img
            className="card-img-top"
            style={{ width: "200px", height: "200px" }}
            src={sanPham.hinhAnh}
            alt
          />
          <div className="card-body">
            <h4 className="card-title">{sanPham.ten}</h4>
            <p className="card-text">{sanPham.gia}</p>
          </div>
        </div>
      </div>
    );
  }
}
