import React, { Component } from 'react'

export default class ThongTinSV extends Component {
   
    render() {
        // let { ma, ten, tuoi } = this.props.sinhVien;
        let { sinhVien } = this.props;
        return (
          <div className="card text-white bg-dark">
  <img width="100" height="180" className="card-img-top" src="https://picsum.photos/100/180" alt="abc" />
  <div className="card-body">
    <h4 className="card-title">{sinhVien?.ten}</h4>
    <p className="card-text">{sinhVien?.tuoi}</p>
  </div>
</div>

        )
    }
}
