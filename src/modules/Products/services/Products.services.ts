import { Routes } from "../config/Routes";
import { products } from "../models/Products";

export class CategoryService {
    async getCategories(): Promise<string[]> {
      try {
        const response = await fetch(Routes.LIST_CATEGORIES);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
      }
    }
  }

  export class ProductService {
    async getProducts(type:string | null): Promise<products[]> {
      let route: string = Routes.LIST_PRODUCTS;
      if(type){
        route = route += `/category/${type}`;
      }
      try {
        const response = await fetch(route);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
    }
  }
  
 