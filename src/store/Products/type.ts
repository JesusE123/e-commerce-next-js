export interface Products {
    queryName: string;
    selectType: string | null;
    products: Product[]; // Array de objetos tipo Product
    cart: Product[]; // Array de objetos tipo Product
  }

  interface Product {
    id:number
    image: string;
    title: string;
    description: string;
    price: number;
    quantity:number
  }