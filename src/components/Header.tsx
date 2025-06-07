"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem("user");
        if (saved) {
            const data = JSON.parse(saved);
            setUser(data.username);
        };
    }, [])

    function logout() {
        localStorage.removeItem("user");
        setUser(null);
        window.location.href = "/login";
    }

    return (
        <header className="bg-blue-600 text-white px-6 py-4 mb-8 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
                Fake Store
            </Link>
            <div className="flex items-center gap-4">
                {user ? (
                    <>
                        <span>Olá, {user}</span>
                        <button
                            onClick={logout}
                            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
                        >
                            Sair
                        </button>
                    </>
                ):(
                    <Link
                        href="/login"
                        className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
                    >
                        Entrar
                    </Link>
                )}
            </div>
        </header>
    )
}