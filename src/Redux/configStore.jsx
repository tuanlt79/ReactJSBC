import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducer/GioHangReducer";
import { baiTapGameReducer } from "./reducer/BTGameXucXacReducer";
const rootReducer = combineReducers({
  gioHangReducer: gioHangReducer,
  baiTapGameReducer,
  //state theo từng nghiệp vụ
});
export const store = createStore(rootReducer);
