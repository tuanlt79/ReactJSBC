import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducer/GioHangReducer";
import { baiTapGameReducer } from "./reducer/BTGameXucXacReducer";
import { BTGameOanTuXiReducer } from "./reducer/BTGameOanTuXiReducer";
const rootReducer = combineReducers({
  gioHangReducer: gioHangReducer,
  baiTapGameReducer,
  BTGameOanTuXiReducer,
  //state theo từng nghiệp vụ
});
export const store = createStore(rootReducer);
