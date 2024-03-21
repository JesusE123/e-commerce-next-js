import React from 'react'
import useSearchProduct from './useSearchProduct'
import { useAppSelector } from '@/hooks/store';
const SearchProduct = () => {
  const { handlechange, handleSubmit } = useSearchProduct();
 
  return (
    <div className='mt-4'>
        <span className='text-white'>Search product with name</span>
        <form className='mt-3' onSubmit={handleSubmit}>
            <input required type="text"  name='nameProduct' placeholder='Product...' className='bg-gray-500 rounded px-2 border text-white' onChange={handlechange} />
        </form>
    </div>
  )
}

export default SearchProduct