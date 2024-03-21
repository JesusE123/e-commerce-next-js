// components/ProductsComponent.tsx

import React from 'react';
import useProducts from './useProducts';
import ProductCard from './ProductCard';

import { products } from '../../models/Products';
import Loading from '@/components/Loading/Loading';


const ProductsList = () => {
  const {result, loading, error, addProductCart } = useProducts();
  
  if (loading) {
    return <div>
     <Loading />
    </div>;
  }

  if (error) {
    return <div className='text-white'>Error: {error}</div>;
  }
  

  return (
    <div className='text-white'>
      <div className="grid grid-cols-3 gap-4">
      {result.map((product:products) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    description={product.description}
                    addProductCart={addProductCart}
                />
            ))}
    
      </div>
    </div>
  );
};

export default ProductsList;