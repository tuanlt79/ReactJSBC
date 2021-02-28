import React, { Component } from "react";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class DemoQLSP extends Component {
  arrSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  state = {
    sanPhamPhone: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    gioHang: [
      // {
      //   maSP: 1,
      //   tenSP: "VinSmart Live",
      //   soLuong: 1,
      //   giaBan: 5700000,
      //   hinhAnh: "./img/vsphone.jpg",
      //   thanhTien:10000
      // },
    ],
  };
  handleSanPham = (Click) => {
    this.setState({
      sanPhamPhone: Click,
    });
  };
  renderSanPham = () => {
    return this.arrSanPham.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham
            sanPham={item}
            changePhone={this.handleSanPham}
            themGH={this.themGioHang}
          />
        </div>
      );
    });
  };
  themGioHang = (sanPhamClick) => {
    //bước 1: tạo giỏ hàng sản phẩm đã chọn
    let spGioHang = {
      maSP: sanPhamClick.maSP,
      tenSP: sanPhamClick.tenSP,
      soLuong: 1,
      giaBan: sanPhamClick.giaBan,
      hinhAnh: sanPhamClick.hinhAnh,
    };
    //kiểm tra có sản phẩm đã chọn chưa
    let giohangUpdate = [...this.state.gioHang];
    let index = giohangUpdate.findIndex((sp) => sp.maSP === sanPhamClick.maSP);
    if (index !== -1) {
      //bước 2: kiểm tra nếu có sản phẩm thì cộng dồn
      giohangUpdate[index].soLuong += 1;
    } else {
      giohangUpdate.push(spGioHang);
    }
    this.setState({
      gioHang: giohangUpdate,
    });
  };
  handleDelGH = (sanPhamXoa) => {
    // let gioHangUpdate = [...this.state.gioHang];
    // let index = gioHangUpdate.findIndex((sp) => sp.maSP === sanPhamXoa.maSP);
    // gioHangUpdate.splice(index, 1);
    //cách 2: xài filter
    let gioHangUpdate = this.state.gioHang.filter(
      (sp) => sp.maSP !== sanPhamXoa.maSP
    );

    this.setState({
      gioHang: gioHangUpdate,
    });
  };
  upDownGH = (sanPhamUpdate, tangGiam) => {
    //tìm ra sản phẩm trong giỏ hàng dựa vào mã sản phẩm
    let gioHangUpdate = [...this.state.gioHang];
    // console.log(sanPhamUpdate);
    let index = gioHangUpdate.findIndex((sp) => sp.maSP === sanPhamUpdate);
    // console.log(index);
    // Bước 2: tăng số lượng
    if (index !== -1) {
      gioHangUpdate[index].soLuong += tangGiam;
      if (gioHangUpdate[index].soLuong <= 0) {
        alert('Số Lượng không Hợp Lệ')
        gioHangUpdate[index].soLuong -= tangGiam;
       return;
     }
    } 

    this.setState({
      gioHang: gioHangUpdate,
    });
  };
  render() {
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.state.sanPhamPhone;
    return (
      <div>
        <div className="container">
          <h3>Giỏ Hàng</h3>
          <GioHang
            gioHang={this.state.gioHang}
            handleGH={this.handleDelGH}
            tangGiamGH={this.upDownGH}
          />
          <h1 className="text-center">Danh Sách Sản Phẩm</h1>
          <div className="row">{this.renderSanPham()}</div>
          <div className="row mt-5">
            <div className="col-5">
              <h3 className="text-center">Sản Phẩm</h3>
              <img src={hinhAnh} style={{ height: "348px" }} />
            </div>
            <div className="col-7">
              <h3 className="text-center">Thông Tin Sản Phẩm</h3>
              <table className="table">
                <thead>
                  <tr>
                    <td>Mã Sản Phẩm</td>
                    <td>{maSP}</td>
                  </tr>
                  <tr>
                    <td>Tên Sản Phẩm</td>
                    <td>{tenSP}</td>
                  </tr>
                  <tr>
                    <td>Màn Hình</td>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ Điều Hành</td>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera Sau</td>
                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <td>Camera Trước</td>
                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Ram</td>
                    <td>{ram}</td>
                  </tr>
                  <tr>
                    <td>Rom</td>
                    <td>{rom}</td>
                  </tr>
                  <tr>
                    <td>Giá Bán</td>
                    <td>{giaBan}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
