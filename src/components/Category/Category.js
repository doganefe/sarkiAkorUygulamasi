import React from 'react'
import './Category.css'

function Category({ color, title }) {
  return (
    <div className="category" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
    </div>
  )
}

export default Category
