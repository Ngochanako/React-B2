import React, { Component } from 'react'
import Post from './Post';
interface listPostState{
    posts:{id:number,
    tittle:string,
    author:string,}[]
}
export default class ListPost extends Component<{},listPostState> {
    constructor(props:any){
        super(props);
        this.state={
          posts:[{
            id:1,
            tittle:"a",
            author:"bjfjek",
          },
          {
            id:2,
            tittle:"b",
            author:"gygygy",
          }
        ]
        }
    }
  render() {
    return (
      <div>
        {this.state.posts.map(item=><Post key={item.id} post={item}/>)}
      </div>
    )
  }
}
