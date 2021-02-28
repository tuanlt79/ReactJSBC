import logo from "./logo.svg";
import "./App.css";
import BTRenderMap from "./RenderWithMap/BTRenderMap";
import DemoProps from "./Props/DemoProps";
import DemoQLSP from "./Props/BT_Props/DemoQLSP";
import BTGioHangRedux from "./DemoRedux/BTGioHangRedux/BTGioHangRedux";

function App() {
  return (
    <div className="App">
      {/* <RenderWithMap /> */}
      {/* <BTRenderMap /> */}
      {/* <DemoProps /> */}
      {/* <DemoQLSP/> */}
      <BTGioHangRedux />
    </div>
  );
}

export default App;
