import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({category}) => {
  return (
    <div className='border py-3 px-5 rounded'>
        <Link to={`/categories/${category.slug}/${category.id}`}><h1>{ category.name}</h1></Link>
    </div>
  )
}

export default Category