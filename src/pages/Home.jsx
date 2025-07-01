import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SongCard from "../components/SongCard";
import ArtistCard from "../components/ArtistCard";
import AlbumCard from "../components/AlbumCard";

import { songs } from "../data/songs";
import { artists } from "../data/artists";
import { albums } from "../data/albums";

export default function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="h-screen flex flex-col bg-gray-900 text-white">
            <Navbar openSidebar={() => setSidebarOpen(true)} />

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar escritorio (oculto en móviles) */}
                <aside className="hidden md:flex w-1/4 h-full bg-gray-900 border-r border-gray-800 px-6 py-4">
                    <Sidebar />
                </aside>

                {/* Sidebar móvil overlay */}
                {sidebarOpen && (
                    <div className="fixed inset-0 z-40 md:hidden bg-black bg-opacity-60">
                        <div className="w-3/4 h-full bg-gray-900 p-6 shadow-lg flex flex-col">
                            {/* Botón cerrar */}
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="self-end mb-4 text-purple-500 hover:text-purple-400"
                                aria-label="Cerrar menú"
                            >
                                ✕
                            </button>
                            <Sidebar />
                        </div>
                    </div>
                )}

                {/* Contenido derecho con scroll */}
                <main className="flex-1 h-full overflow-y-auto p-6">
                    {/* Canciones */}
                    <section>
                        <h2 className="text-2xl font-bold text-purple-500 mb-4">
                            Canciones del momento
                        </h2>
                        <div>
                            {songs.length > 0 ? (
                                songs.map((song) => (
                                    <SongCard key={song.id} song={song} />
                                ))
                            ) : (
                                <p>No hay canciones disponibles</p>
                            )}
                        </div>
                    </section>

                    {/* Artistas */}
                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-purple-500 mb-4">
                            Artistas del momento
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                            {artists.length > 0 ? (
                                artists.map((artist) => (
                                    <ArtistCard key={artist.id} artist={artist} />
                                ))
                            ) : (
                                <p>No hay artistas disponibles</p>
                            )}
                        </div>
                    </section>

                    {/* Álbumes */}
                    <section className="mt-10 mb-10">
                        <h2 className="text-2xl font-bold text-purple-500 mb-4">
                            Álbumes del momento
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {albums.length > 0 ? (
                                albums.map((album) => (
                                    <AlbumCard key={album.id} album={album} />
                                ))
                            ) : (
                                <p>No hay álbumes disponibles</p>
                            )}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
