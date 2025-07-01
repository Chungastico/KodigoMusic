export default function SongCard({ song }) {
    return (
        <div className="flex items-center gap-4 mb-4">
            <img
                src={song.image}
                alt={song.title}
                className="w-16 h-16 object-cover rounded"
            />
            <div>
                <h3 className="font-semibold text-white text-sm">{song.title}</h3>
                <p className="text-xs text-gray-400">{song.artist}</p>
            </div>
        </div>
    );
}
