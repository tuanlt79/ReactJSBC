import { act } from "react-dom/test-utils";

const stateDefault = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone",
      giaBan: 1000,
      hinhAnh: "./img/applePhone.jpg",
      soLuong: 1,
    },
  ],
};
export const gioHangReducer = (state = stateDefault, action) => {
  //   switch (action.type) {
  // case "THEM_GIO_HANG":
  //   { const gioHangUpdate = [...state.gioHang, action.spGioHang];
  //Gán state.gioHang= giỏ hàng sau khi xử lý
  // state.gioHang = gioHangUpdate;
  //xử lý sétState trên redux
  // console.log("object4", action);

  //Bước 1: sao chép giỏ hàng ra array mới
  //   const gioHangUpdate = [...state.gioHang];
  //   Bước 2: kiểm tra action.spGioHang gửi lên component có trong sate.gioHang chưa?
  //   let index = gioHangUpdate.findIndex((spGH) => {
  //     spGH.maSP === action.spGioHang.maSP;
  //   });
  //   if (index !== -1) {
  //     gioHangUpdate[index].soLuong += 1;
  //   } else {
  //     gioHangUpdate.push(action.spGioHang);
  //   }
  //Bước 3: cập nhật lại state.gioHang => bước này giống như this.sétState lại component
  //   state.gioHang = gioHangUpdate;
  //   return { ...state };
  // default:
  switch (action.type) {
    case "THEM_GIO_HANG": {
      //xu ly thay doi  state.gioHang tren redux
      //console.log('object',action)
      //Buoc 1: sao chep gio hang ra arraymoi
      const gioHangUpdate = [...state.gioHang];
      //Buoc 2: kiem tra action.spGioHang gui len tu component co trong state.gioHang chua?
      let index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.spGioHang.maSP
      );

      if (index !== -1) {
        gioHangUpdate[index].soLuong += 1;
      } else {
        gioHangUpdate.push(action.spGioHang);
      }
      //buoc 3: Cap nhat lai state.gioHang => buoc nay giong nhu this.setState tai component
      state.gioHang = gioHangUpdate;
      return { ...state }; //...du lieu moi, du lieu text khg can them ...
    }
    case "THAY_DOI_SO_LUONG": {
      const gioHangUpdate = [...state.gioHang];
      //kiểm tra sản phẩm có trong giỏ hàng không
      let index = gioHangUpdate.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        gioHangUpdate[index].soLuong += action.soLuong;
        if (gioHangUpdate[index].soLuong <= 0) {
          alert("Khong HOp le");
          gioHangUpdate[index].soLuong -= action.soLuong;
        }
      }
      state.gioHang = gioHangUpdate;
      return { ...state };
    }

    case "XOA_SAN_PHAM": {
      let gioHangUpdate = [...state.gioHang];
      gioHangUpdate = gioHangUpdate.filter((spGH) => spGH.maSP !== action.maSP);

      // Cập nhật lại giỏ hàng
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    // case "XOA_SAN_PHAM": {
    //   let gioHangUpdate = [...state.gioHang];
    //   //   //Xu li xoa gio hang
    //   gioHangUpdate = gioHangUpdate.filter((spGH) => spGH.maSP !== action.maSP);
    //   //   //cap nhat lai state gio hang
    //   console.log("haha");
    //   state.gioHang = gioHangUpdate;
    //   return { ...state };
    // }
  }
  return { ...state };
};
