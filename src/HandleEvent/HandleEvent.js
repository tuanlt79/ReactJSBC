import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("Hello Tuan");
  };

  showMessage = (name) => {
    alert("Hello " + name + " dep trai");
  };

  render() {
    return (
      <div>
        {/* Cach 1: truyen callback trực tiếp */}
        <button
          id="btnClickme"
          className="btn btn-success"
          onClick={this.handleClick}
        >
          Click me!
        </button>
        <button
          id="btnClickme"
          className="btn btn-success"
          onClick={this.showMessage.bind(this, "tuan")}
        >
          Show message!
        </button>
        {/* Cách 2: truyền hằng đặc danh */}
        <br></br>
        <button
          className="btn btn-danger"
          onClick={(event) => {
            this.showMessage("Test");
          }}
        >
          Show me
        </button>
      </div>
    );
  }
}
