import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col text-center">
            <h1 className="text-4xl font-bold mb-4">
                Página não encontrada
            </h1>
            <p className="text-lg text-gray-600 mb-6">
                O recurso que você está procurando não existe ou fi removido.
            </p>
            <Link href="/" className="text-blue-600 hover:underline">
                Voltar para Home
            </Link>
        </div>
    )
}