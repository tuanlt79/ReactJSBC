import logo from "./logo.svg";
import "./App.css";
import BTRenderMap from "./RenderWithMap/BTRenderMap";
import DemoProps from "./Props/DemoProps";
import BaiTapLayout from "./components/BaiTapLayout/BaiTapLayout";
import BTProducList from "./components/BaiTapLayout/BTProducList";
import DemoQLSP from "./Props/BTPhone/DemoQLSP";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout/> */}
      {/* <RenderWithMap /> */}
      {/* <BTRenderMap /> */}
      {/* <DemoProps /> */}
      <DemoQLSP/>
    </div>
  );
}

export default App;
