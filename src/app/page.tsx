import ProductList from "../components/ProductList";


type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products/", {
    cache: "no-store"
  });
  
  if(!res.ok) {
    throw new Error("Erro ao buscar produtos")
  }

  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  return (

    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {products.map((product) => (
        <ProductList key={product.id} product={product}/>
      ))}
    </section>
   
  )
}
