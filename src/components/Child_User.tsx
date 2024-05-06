import React from 'react'
interface User{

    id:number,
    name:string,
    address:string,
}
interface Users{
    users:User[];
}

export default function Child_User(props:Users) {
  return (
    <div>
        {props.users.map((item,index)=>
            (
                <div key={index}>
                    <p>Id:{item.id}</p>
                    <p>Tên:{item.name}</p>
                    <p>Địa chỉ:{item.address}</p>
                </div>
            )
        )}
    </div>
  )
}
