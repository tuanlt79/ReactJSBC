import logo from "./logo.svg";
import "./App.css";
// import HeaderFunc from "./components/HeaderFunc";
// import HeaderClass from "./components/HeaderClass";
// import BaiTapLayout from "./components/BaiTapLayout/BaiTapLayout";
// import BTHeader from "./components/BaiTapLayout/BTHeader";
// import BTSilder from "./components/BaiTapLayout/BTSilder";
// import BTProducList from "./components/BaiTapLayout/BTProducList";
// import BTProduct from "./components/BaiTapLayout/BTProduct";
// import BTFooter from "./components/BaiTapLayout/BTFooter";
import DataBinding from "./DataBinding/DataBinding";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      <DataBinding />
    </div>
  );
}

export default App;
