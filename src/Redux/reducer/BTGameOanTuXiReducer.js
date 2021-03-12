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
  switch (action.type) {
    case "CHON_DAT_CUOC": {
      let mangDatCuoc = [...state.mangOanTuXi];
      mangDatCuoc = mangDatCuoc.map((item, index) => {
        //cách 1:
        if (item.ma === action.datCuoc) {
          return { ...item, chonMenu: true };
        }
        return { ...item, chonMenu: false };
      });
      //cách 2: tìm vị trí index thay đổi
      //   let index = mangDatCuoc.findIndex((qc) => qc.ma === action.datCuoc);
      //   if (index !== -1) {
      //     mangDatCuoc[index].chonMenu = true;
      //   }
      state.mangOanTuXi = mangDatCuoc;
      return { ...state };
    }
    case "PLAY_GAME_OTX": {
      let numberRandom = Math.floor(Math.random() * 3);
      let arrRandom = state.mangOanTuXi[numberRandom];
      state.playerBot = arrRandom;
    }
    case "KET_QUA_GAME": {
      state.soBanChoi += 1;
      let player = state.mangOanTuXi.find((item) => item.chonMenu === true);
      let bot = state.playerBot;
      switch (player.ma) {
        case "keo":
          {
            if (bot.ma === "keo") {
              state.ketQua = "ahehe, Bạn Hoà";
            } else if (bot.ma === "bua") {
              state.ketQua = "ahuhu, Bạn Thua";
            } else {
              state.ketQua = " ahihi, Bạn Thắng";
              state.soBanThang += 1;
            }
          }
          break;
        case "bua":
          {
            if (bot.ma === "keo") {
              state.ketQua = " ahihi, Bạn Thắng";
              state.soBanThang += 1;
            } else if (bot.ma === "bua") {
              state.ketQua = "ahehe, Bạn Hoà";
            } else {
              state.ketQua = "ahuhu, Bạn Thua";
            }
          }
          break;
        case "bao":
          {
            if (bot.ma === "keo") {
              state.ketQua = "ahuhu, Bạn Thua";
            } else if (bot.ma === "bua") {
              state.ketQua = " ahihi, Bạn Thắng";
              state.soBanThang += 1;
            } else {
              state.ketQua = "ahehe, Bạn Hoà";
            }
          }
          break;

        default:
          break;
      }
    }
    default:
      break;
  }
  return { ...state };
};
