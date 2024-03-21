'use client'

import React from 'react'
import useCategories from './UseCategories';

import SearchProduct from '../SearchProduct/SearchProduct';
import { resetData } from '@/store/Products';
import { useAppDispatch } from '@/hooks/store';


function Category() {
  const { categories, loading, error,getSelectType } = useCategories();
  const dispatch = useAppDispatch()
  

  if (error) {
    return <div className='text-white'>Error: {error}</div>;
  }
  return (
    <>
    <h2 className='text-white'>Categories</h2>
    <div className='border-t border-b border-gray-500 text-white mt-5'>
      
       <ul className='py-10 space-y-4'>
        {categories.map((category, index) => (
          <li 
          key={index}
          onClick={(() => getSelectType(category))}
          className='text-white hover:text-gray-500 transition'
          >
            {category}
          </li>
        ))}
      </ul>
     <button className='text-white hover:text-gray-500' onClick={() => dispatch(resetData())}>All</button>
    </div>
    <SearchProduct />
    </>
  )
}

export default Category