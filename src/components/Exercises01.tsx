import React, { Component } from 'react'
interface Exercises01State{
    myName:string;
}
export default class Exercises01 extends Component<{},Exercises01State> {
    constructor(props:any){
        super(props);
        this.state={
            myName:"Nguyễn Minh Sơn"
        }
    }
  render() {
    return (
      <div>
        <h2>Họ và tên là: {this.state.myName}</h2>
      </div>
    )
  }
}
