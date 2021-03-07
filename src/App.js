import logo from "./logo.svg";
import "./App.css";
import BTRenderMap from "./RenderWithMap/BTRenderMap";
import DemoProps from "./Props/DemoProps";
import DemoQLSP from "./Props/BT_Props/DemoQLSP";
import BTGioHangRedux from "./DemoRedux/BTGioHangRedux/BTGioHangRedux";
import BaiTapGameXucXac from "./DemoRedux/BTGioHangRedux/BTGameXucXac/BaiTapGameXucXac";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout/> */}
      {/* <RenderWithMap /> */}
      {/* <BTRenderMap /> */}
      {/* <DemoProps /> */}
      {/* <DemoQLSP/> */}
      {/* <BTGioHangRedux /> */}
      <BaiTapGameXucXac />
    </div>
  );
}

export default App;
