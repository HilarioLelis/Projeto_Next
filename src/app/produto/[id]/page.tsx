import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";



type Product = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

type Props = {
    params: Promise<{ id: string }>
};

// Função só para gerar metadata dinâminco com base no produto
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) {
        return {
            title: "Produto não encontrado",
            description: "Esse produto não está disponível ou foi removido"
        };
    }

    const product: Product = await res.json();

    return {
        title: product.title,
        description: product.description.slice(0, 150)
    }
}

// Esta função é executada no servidor (SSR) e busca os dados do produto 
export default async function ProdutoPage({params}: Props) {
    const { id } = await params
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if(!res.ok) {
        return notFound();
    };

    const product: Product = await res.json();

    return (
        <div className="max-w-4xl mx-auto p-8">
            <Link href="/" className="text-blue-600 hover:underline mb-4 block">← Voltar para a loja</Link>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <div className="flex flex-col sm:flex-row gap-8">
                <Image 
                    src={product.image}
                    alt={product.title}
                    width={256}
                    height={256}
                    className="w-64 h-64 object-contain border rounded-md bg-white p-4"
                />
                <div className="flex flex-col justify-between">
                    <p className="text-lg text-gray-600">{product.description}</p>
                    <p className="text-xl font-bold text-blue-500 mt-4">R$ {product.price.toFixed(2)}</p>
                    <p className="italic text-sm mt-2">Categoria: {product.category}</p>
                </div>
            </div>
        </div>
    )
}