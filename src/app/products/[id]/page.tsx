import { products } from "@/modules/Products/models/Products";

export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
 
  return data.map((product:products) => ({
    id: product.id.toString(),
  }))
}

async function getProduct(id:string){
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data  = await res.json();
  return data;
}
 

export default async function Page({ params }: { params: { id: string } }) {
const product = await getProduct(params.id)

 return(
  <div className="h-full flex justify-center items-center text-white space-x-10">
    <img src={product.image} alt="image" height={150} width={240} className="rounded" />
    <div className="flex flex-col w-80 ">
    <h3 className="text-3xl">{product.title}</h3>
    <p>{product.description}</p>
    <span className="text-muted-foreground">${product.price} - {product.category}</span>
    <p></p>
    </div>
    
  </div>
 )
  
}