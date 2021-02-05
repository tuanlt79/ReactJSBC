import React, { Component } from 'react'
import ThongTinSV from './ThongTinSV'

export default class DemoProps extends Component {
    mangSinhVien = [
        { ma: 'sv1', ten: 'Tan', tuoi: 22 },
        { ma: 'sv2', ten: 'Tuan', tuoi: 23 },
        { ma: 'sv3', ten: 'Binh', tuoi: 25 },
        
    ];
    renderSinhVien = () => {
        const result = this.mangSinhVien.map((sv, index) => {
            return  <div className="col-4" key={index}>
            <ThongTinSV sinhVien={sv}/>
    </div>
        })
        return result;
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h3 className="text-center display-4">
                        Thông tin Sinh Viên
                    </h3>
                    <div className="row">
                        {this.renderSinhVien()};
                 </div>
                </div>
            </div>
        )
    }
}
