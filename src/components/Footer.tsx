export default function Footer() {
    return (
        <footer className="mt-44 py-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
            <p>
               © {new Date().getFullYear()} Fake Store. Feito com ❤️ usando Next.js e HeroUI.
            </p>
        </footer>
    )
}