import React, { Component } from "react";

export default class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="display-4">
          Ban Chon: <span className="text-success">TÀI</span>
        </div>
        <div className="display-4">
          Số Bàn Thắng: <span className="text-warning">5</span>
        </div>
        <div className="display-4">
          Số Bàn Chơi: <span className="text-primary">10</span>
        </div>
      </div>
    );
  }
}
