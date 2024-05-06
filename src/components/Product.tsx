import React from 'react'
interface Post{
    product:{
        id:number,
        name:string,
    }
}
export default function Product(props:Post) {
  return (
    <div>
      <p>Id:{props.product.id}</p>
      <p>Tên:{props.product.name}</p>
      <hr />
    </div>
  )
}
