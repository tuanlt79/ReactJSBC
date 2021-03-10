import logo from "./logo.svg";
import "./App.css";
import BTRenderMap from "./RenderWithMap/BTRenderMap";
import DemoProps from "./Props/DemoProps";
import DemoQLSP from "./Props/BT_Props/DemoQLSP";
import BTGioHangRedux from "./DemoRedux/BTGioHangRedux/BTGioHangRedux";
import BaiTapGameXucXac from "./DemoRedux/BTGioHangRedux/BTGameXucXac/BaiTapGameXucXac";
import BTGamOanTuXi from "./DemoRedux/BTGioHangRedux/BTGameOanTuXi/BTGamOanTuXi";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout/> */}
      {/* <RenderWithMap /> */}
      {/* <BTRenderMap /> */}
      {/* <DemoProps /> */}
      {/* <DemoQLSP/> */}
      {/* <BTGioHangRedux /> */}
      {/* <BaiTapGameXucXac /> */}
      <BTGamOanTuXi />
    </div>
  );
}

export default App;
