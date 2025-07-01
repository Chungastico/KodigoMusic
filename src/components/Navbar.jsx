import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bars3Icon, HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar({ openSidebar }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <nav className="w-full flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
            <div className="flex items-center space-x-6">
                {/* Botón hamburguesa móvil */}
                <button
                    className="md:hidden mr-2 p-1 rounded hover:text-purple-500"
                    onClick={openSidebar}
                    aria-label="Abrir menú"
                >
                    <Bars3Icon className="w-6 h-6" />
                </button>

                <h1 className="text-xl font-bold text-purple-500">Kodigo Music</h1>

                {/* Botones visibles en md+ */}
                <div className="hidden md:flex items-center space-x-6">
                    <button className="flex items-center space-x-1 hover:text-purple-500">
                        <HomeIcon className="w-5 h-5" />
                        <span className="hidden sm:inline text-sm">Inicio</span>
                    </button>

                    <button className="flex items-center space-x-1 hover:text-purple-500">
                        <MagnifyingGlassIcon className="w-5 h-5" />
                        <span className="hidden sm:inline text-sm">Buscar</span>
                    </button>

                    <input
                        type="text"
                        placeholder="Buscar música..."
                        className="hidden md:block px-3 py-1 bg-gray-800 rounded text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                {user ? (
                    <>
                        <span className="text-sm">Hola, {user.displayName || user.email}</span>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 text-sm px-4 py-1 rounded hover:bg-red-700 transition-colors"
                        >
                            Cerrar sesión
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/register" className="text-sm hover:text-purple-500 transition-colors">
                            Regístrate
                        </Link>
                        <Link
                            to="/login"
                            className="bg-purple-500 text-sm px-4 py-1 rounded hover:bg-purple-600 transition-colors"
                        >
                            Inicia sesión
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}
