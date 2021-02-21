import logo from "./logo.svg";
import "./App.css";
import BTRenderMap from "./RenderWithMap/BTRenderMap";
import DemoProps from "./Props/DemoProps";
import DemoQLSP from "./Props/BT_Props/DemoQLSP";

function App() {
  return (
    <div className="App">
      {/* <RenderWithMap /> */}
      {/* <BTRenderMap /> */}
      {/* <DemoProps /> */}
      <DemoQLSP/>
    </div>
  );
}

export default App;
