import React, { Children, Component } from 'react'
import Children_Comp from './Children_Comp';
interface Parent_CompState{
    name:string;
}
export default class Parent_Comp extends Component<{},Parent_CompState> {
    constructor(props:any){
        super(props);
        this.state={
            name:"Ngfeufue",
        }
    }
  render() {
    return (
      <div>
        <h4>Họ và tên bên component cha:{this.state.name}</h4>
        <Children_Comp name={this.state.name}/>
      </div>
    )
  }
}
