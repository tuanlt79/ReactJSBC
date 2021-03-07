const stateDefault = {
  banChon: "Tai",
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    { diem: 1, hinhAnh: "./img/1.png" },
    { diem: 1, hinhAnh: "./img/2.png" },
    { diem: 1, hinhAnh: "./img/3.png" },
  ],
};
export const baiTapGameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_TAI_XIU": {
      state.banChon = action.giaTri;
      //   console.log(state);
      return { ...state };
    }
    case "PLAY_GAME": {
      console.log("playgame");
      //Bước 1 tạo ra mảng xúc sắc ngẫu nhiêu
      let mangXXNN = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        //tạo ra 3 con object ngẫu nhiên
        let xxNN = { diem: soNgauNhien, hinhAnh: `./img/${soNgauNhien}.png` };
        mangXXNN.push(xxNN);
      }
      // gán mảng xúc xắc ngẫu nhiêu bằng mảng xúc xắc
      state.mangXucXac = mangXXNN;

      //Xử lý kết quả
      let tongDiem = mangXXNN.reduce((td, xucXac, index) => {
        return (td += xucXac.diem);
      }, 0);

      if (
        (tongDiem >= 11 && state.banChon === "TÀI") ||
        (tongDiem < 11 && state.banChon === "XỈU")
      ) {
        state.soBanThang += 1;
      }
      state.tongSoBanChoi += 1;
      return { ...state };
    }
    default:
      return { ...state };
    // default nếu không có xảy ra action thì trả về state mặc định;
  }
};
