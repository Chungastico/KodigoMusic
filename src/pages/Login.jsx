import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [authError, setAuthError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!email.trim()) newErrors.email = "El correo es obligatorio";
        if (!password.trim()) newErrors.password = "La contraseña es obligatoria";

        setErrors(newErrors);
        setAuthError("");

        if (Object.keys(newErrors).length === 0) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Inicio de sesión exitoso ✅");
                navigate("/");
            } catch (error) {
                if (error.code === "auth/user-not-found") {
                    setAuthError("El usuario no existe.");
                } else if (error.code === "auth/wrong-password") {
                    setAuthError("Contraseña incorrecta.");
                } else {
                    setAuthError("Error al iniciar sesión.");
                }
            }
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center text-white px-4 sm:px-6 lg:px-8">
            {/* Fondo */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/bg-login.png')" }}
            ></div>

            {/* Capa oscura */}
            <div className="absolute inset-0 bg-black opacity-60"></div>


            {/* Contenido */}
            <div className="relative z-10 bg-gray-800 bg-opacity-90 p-6 sm:p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-purple-500 mb-6 text-center">Inicia sesión</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm mb-1">
                            Correo electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            autoComplete="email"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm mb-1">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            autoComplete="current-password"
                        />
                        {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                    </div>

                    {authError && (
                        <p className="text-red-400 text-sm mt-2 text-center">{authError}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded transition-colors"
                    >
                        Iniciar sesión
                    </button>
                </form>

                <p className="text-sm text-gray-400 mt-4 text-center">
                    ¿No tienes cuenta?{" "}
                    <Link to="/register" className="text-purple-500 hover:underline">
                        Regístrate
                    </Link>
                </p>
            </div>
        </div>
    );
}
