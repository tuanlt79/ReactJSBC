import React, { Component } from "react";
import { connect } from "react-redux";
class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
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

            <button
              className="btn btn-danger ml-2"
              onClick={() => {
                this.props.themGioHang(sanPham);
              }}
            >
              Thêm Giỏ Hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return;
};
// hàm dùng để tạo ra props là hàm xử lý sự kiện đưa dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      console.log("sp click", sanPhamClick);
      //tạo ra spGiohang từ spClick
      const spGioHang = {
        // maSP:sanPhamClick.maSP,
        ...sanPhamClick,
        soLuong: 1,
      };
      //đưa dữ liệu lên redux store
      const action = {
        type: "THEM_GIO_HANG", // thuộc tính bắt buộc khi gửi dữ liệu lên redux
        spGioHang: spGioHang,
      };
      //dùng hàm dispatch đưa dữ liệu lên reducer (redux store)
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux);
