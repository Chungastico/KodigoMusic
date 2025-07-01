export default function PodcastCard({ onExplore }) {
    return (
        <div className="bg-gray-800 rounded-lg p-6 mb-6 text-white flex flex-col items-start shadow-md">
            <h2 className="text-lg font-semibold mb-2">Podcast</h2>
            <p className="text-gray-300 mb-4">
                Descubrí los mejores podcasts para acompañarte en cualquier momento.
            </p>
            <button
                onClick={onExplore}
                className="bg-purple-500 hover:bg-purple-600 transition-colors px-4 py-2 rounded text-sm font-medium"
            >
                Explorar Podcast
            </button>
        </div>
    );
}
