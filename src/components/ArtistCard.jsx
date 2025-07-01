export default function ArtistCard({ artist }) {
    return (
        <div className="flex flex-col items-center bg-gray-800 rounded p-4 hover:bg-gray-700 transition-colors">
            <img
                src={artist.image}
                alt={artist.name}
                className="w-24 h-24 object-cover rounded-full mb-2"
            />
            <h3 className="text-white text-sm font-medium text-center">{artist.name}</h3>
        </div>
    );
}
