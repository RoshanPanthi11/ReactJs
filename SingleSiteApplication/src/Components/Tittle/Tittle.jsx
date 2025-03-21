import React from 'react'
import './Tittle.css'

const Tittle = ({subTitle,title}) => {
  return (
    <div className="tittle">
        <p>{subTitle}</p>
        <h2>{title}</h2>

    </div>
  )
}

export default Tittle