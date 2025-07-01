export default function Footer() {
    return (
        <footer className="pt-6 border-t border-gray-800 text-sm text-gray-400">
            <div className="flex flex-col space-y-2">
                <a
                    href="https://www.instagram.com/ga_campos672/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-500 transition-colors"
                >
                    Instagram: @ga_campos672
                </a>
                <a
                    href="https://github.com/Chungastico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-500 transition-colors"
                >
                    GitHub: Chungastico
                </a>
                <p className="text-xs text-gray-600 mt-2">© {new Date().getFullYear()} Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
