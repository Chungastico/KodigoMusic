import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
        if (!form.email.trim()) newErrors.email = "El correo es obligatorio";
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Correo inválido";
        if (!form.password) newErrors.password = "La contraseña es obligatoria";
        if (form.password !== form.confirmPassword)
            newErrors.confirmPassword = "Las contraseñas no coinciden";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Registro válido. Aquí iría la lógica de envío.");
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center text-white px-4 sm:px-6 lg:px-8">
            {/* Fondo */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/bg-register.png')" }}
            ></div>

            {/* Capa oscura */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Botón volver */}
            <Link
                to="/"
                className="absolute top-4 left-4 text-sm text-white bg-black/50 hover:bg-purple-500 px-3 py-1 rounded transition-colors z-20"
            >
                🏠 Volver al inicio
            </Link>

            {/* Formulario */}
            <div className="relative z-10 bg-gray-800 bg-opacity-90 p-6 sm:p-8 rounded shadow-md w-full max-w-md transition duration-700 ease-out">
                <h2 className="text-2xl font-bold text-purple-500 mb-6 text-center">Crea tu cuenta</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm mb-1">
                            Nombre completo
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            autoComplete="name"
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm mb-1">
                            Correo electrónico
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
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
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            autoComplete="new-password"
                        />
                        {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm mb-1">
                            Confirmar contraseña
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            autoComplete="new-password"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded transition-colors"
                    >
                        Registrarse
                    </button>
                </form>

                <p className="text-sm text-gray-400 mt-4 text-center">
                    ¿Ya tienes una cuenta?{" "}
                    <Link to="/login" className="text-purple-500 hover:underline">
                        Inicia sesión
                    </Link>
                </p>
            </div>
        </div>
    );
}
