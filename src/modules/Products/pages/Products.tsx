'use client'

import React from 'react'
import Category from '@/modules/Products/components/Categories/Category'
import ProductList from '../components/Products/ProductList'

const Products = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-5 gap-4">
    <div className="row-span-5 col-start-2 me-5">
      <Category />
    </div>
    <div className="col-span-5 row-span-5 col-start-3">
      <ProductList />
    </div>
  </div>
  )
}

export default Products