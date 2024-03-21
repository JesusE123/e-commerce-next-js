// hooks/useCategories.ts
'use client'
import { useEffect, useState } from 'react';
import ProductsRepository from '../../repository/Products.repository';
import { getTypeProduct } from '@/store/Products';
import { useAppDispatch } from '@/hooks/store';
import { categories } from '../../models/Categories';


const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchCategories = async () => {
      const productRespository = new ProductsRepository();
      try {
        const categoriesData = await productRespository.getAllCategories();
        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError('Error fetching categories');
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const getSelectType = (type:string) => {
    dispatch(getTypeProduct(type))
  }

  return { categories, loading, error,getSelectType };
};

export default useCategories;