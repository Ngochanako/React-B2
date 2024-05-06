import React, { Component } from 'react'
import Product from './Product';
interface listProductState{
    products:{id:number,
    name:string}[]
}
export default class ListProduct extends Component<{},listProductState> {
    constructor(props:any){
        super(props);
        this.state={
          products:[{
            id:1,
            name:"a",
          },
          {
            id:2,
            name:"b",
          }
        ]
        }
    }
  render() {
    return (
      <div>
        {this.state.products.map(item=><Product key={item.id} product={item}/>)}
      </div>
    )
  }
}
