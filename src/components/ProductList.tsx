"use client";

import Link from "next/link";
import Image from "next/image";

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
};

type Props = {
    product: Product;
}

export default function ProductCard({product}: Props) {
    return (
        <Link href={`/produto/${product.id}`}>
            <div 
                key={product.id}
                className="border p-4 rounded shadow hover:shadow-lg transition duration-300 bg-white flex flex-col justify-between h-[360px]"
            >
                <Image
                    src={product.image} 
                    alt={product.title}
                    width={256}
                    height={256}
                    className="h-40 mx-auto  object-contain mb-4"
                />
                <div className="flex-1 px-4 py-3 flex flex-col justify-between">
                    <h3 className="font-semibold text-lg line-clamp-2 mb-2 dark:text-black">{product.title}</h3>
                    <p className="text-blue-600 font-bold text-right">R$ {product.price.toFixed(2)}</p> 
                </div>                
            </div>
        </Link>
        
    )
}