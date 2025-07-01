import PlaylistCard from "./PlaylistCard";
import PodcastCard from "./PodcastCard";
import Footer from "./Footer";

export default function Sidebar() {
    const handleCreatePlaylist = () => {
        alert("Funcionalidad crear playlist aún no implementada");
    };

    const handleExplorePodcast = () => {
        alert("Funcionalidad explorar podcast no implementada aún");
    };

    return (
        <div className="flex flex-col h-full">
            {/* Cards */}
            <PlaylistCard onCreate={handleCreatePlaylist} />
            <PodcastCard onExplore={handleExplorePodcast} />

            {/* Footer */}
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
}
