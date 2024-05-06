import React from 'react'
interface Props{
    product:{
    id:number,
    name:string,
    price: number,
    }
}
export default function Child_Product(props:Props) {
  return (
    <div>
      <p>id:{props.product.id}</p>
      <p>name:{props.product.name}</p>
      <p>price:{props.product.price}</p>
    </div>
  )
}
