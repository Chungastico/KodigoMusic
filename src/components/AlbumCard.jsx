export default function AlbumCard({ album }) {
    return (
        <div className="bg-gray-800 rounded p-4 hover:bg-gray-700 transition-colors">
            <img
                src={album.image}
                alt={album.title}
                className="w-full h-48 object-cover rounded mb-2"
            />
            <h3 className="text-white font-semibold text-sm">{album.title}</h3>
            <p className="text-gray-400 text-xs">{album.artist}</p>
        </div>
    );
}
