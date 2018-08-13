import React from 'react'
import './Drawer.css'

const cheese = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]



export default function Drawer (props) {
  return (
    <div className='Drawer'> 
      <h2> drawer </h2>
      {cheese.map(el => <span className='Drawer__link'> link to somewhere </span>)}
    </div>
  )
}