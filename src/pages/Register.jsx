import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase"; 
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Register() {
    const navigate = useNavigate();

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

    const handleSubmit = async (e) => {
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
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    form.email,
                    form.password
                );

                await updateProfile(userCredential.user, {
                    displayName: form.name,
                });

                alert("Registro exitoso ✅");
                navigate("/"); 
            } catch (error) {
                if (error.code === "auth/email-already-in-use") {
                    setErrors({ email: "El correo ya está registrado." });
                } else {
                    alert("Error al registrar usuario.");
                    console.error(error);
                }
            }
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center text-white px-4 sm:px-6 lg:px-8">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/bg-register.png')" }}
            ></div>

            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative z-10 bg-gray-800 bg-opacity-90 p-6 sm:p-8 rounded shadow-md w-full max-w-md transition duration-700 ease-out">
                <h2 className="text-2xl font-bold text-purple-500 mb-6 text-center">Crea tu cuenta</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Nombre */}
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

                    {/* Email */}
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

                    {/* Password */}
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

                    {/* Confirmar contraseña */}
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
