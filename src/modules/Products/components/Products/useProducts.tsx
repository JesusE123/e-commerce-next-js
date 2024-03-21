// hooks/useProducts.ts

import { useEffect, useState } from 'react';
import ProductsRepository from '../../repository/Products.repository';
import { setData, getProductCart } from '@/store/Products';
import { useAppSelector, useAppDispatch } from '@/hooks/store';
import { products } from '../../models/Products';
const useProducts = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const state = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const abort = new AbortController();
    const fetchProducts = async () => {
      setLoading(true)
      const productRepository = new ProductsRepository();
      try {
        let productsData = await productRepository.getAllProducts(state.selectType);
        if (state.queryName) {
          productsData = productsData.filter(product =>
            product.title.toLowerCase().includes(state.queryName.toLowerCase())
          );
        }
        
        dispatch(setData(productsData))
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
    return () => {
      abort.abort();
    };
  }, [dispatch,state.selectType, state.queryName]);


  const addProductCart = (product:products) => {
    dispatch(getProductCart(product))
  }
  

  return { result: state.products ,loading, error, addProductCart };
};

export default useProducts;