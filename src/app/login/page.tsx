"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    function handleLogin(event: React.FormEvent) {
        event.preventDefault();

        //Validação simples
        if (username === "admin" && password === "123"){
            // Simulando login com localStorege (sem backend real)
            localStorage.setItem("user", JSON.stringify({username}));
            router.push("/")
        } else {
            setError("Usuário ou senha inválidos");
        }
    }

    return (
        <div className="max-w-md mx-auto mt-20 p-8 border rounded shadow">
            <h1 className="text-2xl font-bold mb-6 text-center">
                Login
            </h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input 
                    type="text"
                    placeholder="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border rounded p-2" 
                />
                <input 
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border rounded p-2" 
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                    type="submit"
                    className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
                >
                    Entrar
                </button>
            </form>
        </div>
    )
}