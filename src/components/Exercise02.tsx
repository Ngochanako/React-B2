import React, { Component } from 'react'
interface Exercise02State{
    id:number;
    name:string;
    dateOfBirth:string;
    address:string;
}
export default class Exercise02 extends Component<{},Exercise02State>{
    constructor(props:any){
        super(props);
        this.state={
            id:1,
            name:"Nguyễn Văn Sơn",
            dateOfBirth:"20/1/2008",
            address:"Thanh Xuân",
        }
    }
  render() {
    return (
      <div>
        <h2>Thông tin cá nhân</h2>
        <h5>Id:{this.state.id}</h5>
        <h5>Tên:{this.state.name}</h5>
        <h5>Ngày sinh:{this.state.dateOfBirth}</h5>
        <h5>Địa chỉ:{this.state.address}</h5>
      </div>
    )
  }
}

