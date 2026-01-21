import { useState } from "react";
import { plrPositionStore } from "@/stores/plrPositionsStore";
import { useFetchPositions } from "@/hooks/useFetchPositions";

export default function Homepage() {
    useFetchPositions(); // Just a plain call upon render

    const { positions } = plrPositionStore();
    const serverIds = Object.keys(positions);

    const [selectedServer, setSelectedServer] = useState("all");
    const [isMapOpen, setIsMapOpen] = useState(false);

    const allPlayers = serverIds.flatMap((id) => positions[id] || []);
    const selectedPlayers = selectedServer === "all" ? allPlayers : (positions[selectedServer] || []);
    
    if (serverIds.length === 0) {
        return (
            <div className="flex items-center justify-center h-full text-[--text-secondary]">
                <p className="text-lg">Looks like the universe is empty today? 🌌</p>
            </div>
        );
    }

    return (
        <div className="flex h-[calc(100vh-8rem)] bg-[--bg-dark]">
            <aside className="w-64 bg-[--bg-light] border-r border-custom overflow-y-auto p-4 space-y-2 shadow-custom">
                <button
                    className={`
                        w-full 
                        py-2 
                        px-4 
                        rounded-lg 
                        text-left 
                        font-medium 
                        btn-accent 
                        text-[--text-primary] 
                        ${selectedServer === "all" ? "btn-accent" : "bg-[--bg-dark] hover:btn-accent"}
                    `}
                    onClick={() => setSelectedServer("all")}
                >
                All Servers ({serverIds.length})
                </button>
                {serverIds.map((id) => (
                    <button
                        key={id}
                        className={`
                            w-full 
                            py-2 
                            px-4 
                            rounded-lg 
                            text-left 
                            font-medium 
                            btn-accent 
                            text-[--text-primary] 
                            ${selectedServer === id ? "btn-accent" : "bg-[--bg-dark] hover:btn-accent"}
                        `}
                        onClick={() => setSelectedServer(id)}
                    >
                    Server {id} ({positions[id]?.length || 0} players)
                    </button>
                ))}
            </aside>
            <main className="flex-1 p-6 overflow-y-auto bg-[--bg-dark]">

            </main>
        </div>
    );
}
