import { categories } from "../models/Categories";
import { products } from "../models/Products";
import { CategoryService } from "../services/Products.services";
import { ProductService } from "../services/Products.services";

class ProductsRepository{
  private categoryService: CategoryService;
  private productService:ProductService;
  
  constructor() {
    this.categoryService = new CategoryService();
    this.productService = new ProductService();
  }

  async getAllCategories(): Promise<string[]> {
    
    try {
      const categories = await this.categoryService.getCategories();
      return categories;
    } catch (error) {
      console.error('Error getting categories:', error);
      throw error;
    }
  }

  async getAllProducts(payload:string | null ): Promise<products[]> {
    try {
      const products = await this.productService.getProducts(payload);
      return products;
    } catch (error) {
      console.error('Error getting products:', error);
      throw error;
    }
  }
}

export default ProductsRepository;