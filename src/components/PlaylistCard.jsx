export default function PlaylistCard({ onCreate }) {
    return (
        <div className="bg-gray-800 rounded-lg p-6 mb-6 text-white flex flex-col items-start shadow-md">
            <h2 className="text-lg font-semibold mb-2">Crear Playlist</h2>
            <p className="text-gray-300 mb-4">
                Es muy fácil, te vamos a ayudar a crear tu playlist favorita.
            </p>
            <button
                onClick={onCreate}
                className="bg-purple-500 hover:bg-purple-600 transition-colors px-4 py-2 rounded text-sm font-medium"
            >
                Crear Playlist
            </button>
        </div>
    );
}
