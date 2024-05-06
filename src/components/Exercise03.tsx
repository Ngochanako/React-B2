import React, { Component } from 'react'
interface Exercise03State{
    data:{
        id:number,
        name:string,
        address:string,
    }[]
}
export default class Exercise03 extends Component<{},Exercise03State> {
    constructor(props:any){
        super(props);
        this.state={
            data:
            [
                {
                    id:1,
                    name:"Minh",
                    address:"ha Noi",
                },
                {
                    id:2,
                    name:"Ngoc",
                    address:"Nam dinh",
                }
           ]
       }
    }
  render() {
    return (
      <div>
        {this.state.data.map((item)=>{
            return <h5 key={item.name}>Họ và tên: {item.name}</h5>
        })
        }
      </div>
    )
  }
}
