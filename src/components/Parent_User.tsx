import React from 'react'
import Child_User from './Child_User'

export default function Parent_User() {
    const users=[
        {
            id:1,
            name:"a",
            address:"ha noi",
        },
        {
            id:2,
            name:"b",
            address:"ha noi",
        }
    ]
  return (
    <div>
      <Child_User users={users}/>
    </div>
  )
}
