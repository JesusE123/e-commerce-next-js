
export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
 
  return data.map((product) => ({
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
console.log(product)
 return(
  <h1>hola</h1>
 )
  
}