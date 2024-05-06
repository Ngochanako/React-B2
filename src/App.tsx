
import React from 'react'
import Exercises01 from './components/Exercises01'
import Exercise02 from './components/Exercise02'
import Exercise03 from './components/Exercise03'
import Parent_Comp from './components/Parent_Comp'
import Parent_Product from './components/Parent_Product'
import Parent_User from './components/Parent_User'
import ListProduct from './components/ListProduct'
import ListPost from './components/ListPost'

export default function App() {
  return (
    <div>
      <Exercises01 />
      <Exercise02 />
      <Exercise03 />
      <Parent_Comp />
      <Parent_Product />
      <Parent_User />
      <ListPost />
      <ListProduct />
    </div>
  )
}

