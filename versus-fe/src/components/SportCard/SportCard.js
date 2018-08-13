import React from 'react'
import './SportCard.css'
import { Link } from 'react-router-dom'

export default function SportCard (props) {
  
    return (
      <Link to='/league'>
        <div className="SportCard">
          <h2> props.sport </h2>
        </div>
      </Link>
    )
  }

