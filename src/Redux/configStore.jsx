import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducer/GioHangReducer";
const rootReducer = combineReducers({
  gioHangReducer: gioHangReducer,
  //state theo từng nghiệp vụ
});
export const store = createStore(rootReducer);
