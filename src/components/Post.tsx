import React from 'react'
interface Post{
    post:{
        id:number,
        tittle:string,
        author:string,
    }
}
export default function Post(props:Post) {
  return (
    <div>
      <p>Id:{props.post.id}</p>
      <p>Tiêu đề:{props.post.tittle}</p>
      <p>Tác giả:{props.post.author}</p>
      <hr />
    </div>
  )
}
