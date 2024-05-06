import React from 'react'
import Child_Product from './Child_Product'

export default function Parent_Product() {
    interface Product{
        id:number,
        name:string,
        price: number,
    }
    let product:Product={
        id:1,
        name:'nnnn',
        price: 100000,
    }
  return (
    <div>
      <Child_Product product={product}/>
    </div>
  )
}
