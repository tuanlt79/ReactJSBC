const stateDefault = {
  soBanThang: 0,
  soBanChoi: 0,
  mangOanTuXi: [
    { ma: "keo", hinhAnh: "./img/keo.png", chonMenu: false },
    { ma: "bua", hinhAnh: "./img/bua.png", chonMenu: true },
    { ma: "bao", hinhAnh: "./img/bao.png", chonMenu: false },
  ],
  ketQua: "Bạn Thua, Lêu Lêu",
  playerBot: { ma: "bao", hinhAnh: "./img/bao.png" },
};
export const BTGameOanTuXiReducer = (state = stateDefault, action) => {
  return { ...state };
};
