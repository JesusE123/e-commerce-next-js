import React,{useState} from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AlertDemo } from '@/components/Alert/Alert';
import Link from 'next/link';

   

interface ProductCardProps  {
    id:number
    title:string,
    price:number,
    description:string,
    image:string,
    addProductCart: (product:any) => void;

}
const ProductCard = ({title,price,description,image, addProductCart, id}:ProductCardProps) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  
  const handleAddToCart = () => {
    addProductCart({ image, title, description, price, id });
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 2000)
  };



  return (
    
    <div className="col-span-4 sm:col-span-2 md:col-span-1">
      <Card className="w-[350px] bg-transparent text-gray-500 rounded">
     
        <CardHeader>
          <img src={image}  alt='logo'  className='w-48 h-48 object-cover'/>
          <CardTitle className='line-clamp-1'>{title}</CardTitle>
          <CardDescription className='line-clamp-2'>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {price}$
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={`/products/${id}`} className='text-white hover:text-gray-400'>Read more</Link>
          <Button onClick={handleAddToCart} className='hover:bg-slate-400'>Add to cart</Button>
        </CardFooter>
        {showAlert && <AlertDemo />}
      </Card>
      
    </div>
  
  )
}

export default ProductCard