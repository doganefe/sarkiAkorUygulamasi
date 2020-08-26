import React from 'react'
import Category from './Category'
import './Category.css'

function CategoryList() {
  return (
    <div className="categories">
      <Category
        color="#F7D08A"
        title = "Rock"
        content=""
      />
      <Category
        color="#904e55"
        title = "Pop"
        content=""
      />
      <Category
        color="#98473e"
        title = "Indie/Alternatif"
        content=""
      />
      <Category
        color="#c5c5c5"
        title = "Hip Hop"
        content=""
      />
      <Category
        color="#829191"
        title = "Anadolu Rock"
        content=""
      />
      <Category
        color="#edbfc6"
        title = "Arabesk"
        content=""
      />
    </div>
  )
}

export default CategoryList
