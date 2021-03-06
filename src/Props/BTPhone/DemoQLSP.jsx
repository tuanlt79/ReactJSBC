import React, { Component } from "react";
import DemoSanPham from "./DemoSanPham";
import GioHang from "./GioHang";

export default class DemoQLSP extends Component {
  mangSanPham = [
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
  //dùng object lưu trữ thông tin chi tiết điện thoại
  state = {
    spChiTiet: {
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
    gioHang:[
      // {maSP:1,hinhAnh:"./img/applephone.jpg",tenSP:"Iphone",giaSP:1000,soLuong:1,thanhTien:10000}
    ]
  };
  handleDetail = (Click) => {
    this.setState({
      spChiTiet: Click,
    });
  };
  
  renderSanPham = () => {
    return this.mangSanPham.map((item, index) => {
      return (
          <div className="col-4" key={index}>
          <DemoSanPham sanPham={item} change={this.handleDetail}
            gioHang={this.themGioHang}/>
          {/* <div className="card">
            <img
              className="card-img-top"
              src={item.hinhAnh}
              alt
              style={{ height: "348px" }}
            />
            <div className="card-body">
              <h4 className="card-title">{item.tenSP}</h4>
              <p className="card-text">Giá: {item.giaBan}</p>
              <button
                className="btn btn-success"
                onClick={() => {
                  this.handleDetail(item);
                }}
              >
                Xem Chi Tiet
              </button>
            </div>
          </div> */}
        </div>
      );
    });
  };
  // ham xu ly 
  themGioHang = (sanPhamClick) => {
    // console.log(sanPhamClick)
    let spGH = {
      maSP: sanPhamClick.maSP,
      tenSP: sanPhamClick.tenSP,
      giaSP: sanPhamClick.giaBan,
      soLuong: 1,
      hinhAnh: sanPhamClick.hinhAnh,
      
    }
    let gioHangUpdate = [...this.state.gioHang];
    let indexSPGH = gioHangUpdate.findIndex(sp => sp.maSP === sanPhamClick.maSP);
    if (indexSPGH !==-1) {
      gioHangUpdate[indexSPGH].soLuong += 1;
    } else {
      gioHangUpdate.push(spGH)
    }
    
    this.setState({
      // gioHang ... gio hang moi
      gioHang: gioHangUpdate
      // gioHang:[...this.state.gioHang]

    })
  }
  handleDelGH = (maSP) => {
    
    let gioHangUpdate = [...this.state.gioHang];
    let indexSPGH = gioHangUpdate.findIndex(sp => sp.maSP === maSP.maSP);
    if (indexSPGH !==-1) {
      gioHangUpdate.splice(indexSPGH,1)
    } 
    this.setState({
        gioHang:gioHangUpdate
      })
  
    
  }
    handleUpdown=(maSP,tangGiam) => {
      let gioHangUpDown = [...this.state.gioHang];
      let index = gioHangUpDown.findIndex(sp => sp.maSP === maSP)
      if (index !==-1) {
        gioHangUpDown[index].soLuong += tangGiam;
        if (gioHangUpDown[index].soLuong <= 0) {
          alert('Số lượng không hợp lệ')
          gioHangUpDown[index].soLuong -= tangGiam;
        }
      }
      this.setState({
        gioHang:gioHangUpDown
      })
    }
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
    } = this.state.spChiTiet;
    return (
      <div>
        <div className="container">
          <div className="mt-2 display-4">Gio Hang</div>
          <GioHang gioHang={this.state.gioHang} xoaGH={this.handleDelGH} tangGiam={ this.handleUpdown}/>
          <h1>Danh Sach San Pham</h1>
          <div className="row">{this.renderSanPham()}</div>
          <div className="row mt-5">
            <div className="col-4">
              <h3 className="text-center text-primary">{tenSP}</h3>
              <img src={hinhAnh} alt="" style={{ height: "348px" }} />
            </div>
            <div className="col-8">
              <h3 className="text-center text-primary">Thong So Ky Thuat</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Màn Hình</th>
                    <th>{manHinh}</th>
                  </tr>
                  <tr>
                    <th>He Dieu Hanh</th>
                    <th>{heDieuHanh}</th>
                  </tr>
                  <tr>
                    <th>Camera Truoc</th>
                    <th>{cameraTruoc}</th>
                  </tr>
                  <tr>
                    <th>Camera Sau</th>
                    <th>{cameraSau}</th>
                  </tr>
                  <tr>
                    <th>Ram</th>
                    <th>{ram}</th>
                  </tr>
                  <tr>
                    <th>Rom</th>
                    <th>{rom}</th>
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
