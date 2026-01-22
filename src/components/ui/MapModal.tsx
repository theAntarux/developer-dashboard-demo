import { useEffect, useRef, useState } from "react";
import { plrPositionStore } from "@/stores/plrPositionsStore";
import PlayerDot from "@/components/ui/PlayerDot";

const MAP_ORIGINAL_WIDTH = 1000;

interface MapModalProps {
  serverId: string;
  onCloseCallback: () => void;
};

export default function MapModal({ serverId, onCloseCallback }: MapModalProps) {
    const { positions } = plrPositionStore();
    const players = serverId === "all" ? Object.values(positions).flat() : (positions[serverId] || []);

    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    // Updates map scale based on the window size
    function updateScale() {
        if (containerRef.current) {
            const width = containerRef.current.clientWidth;
            setScale(width / MAP_ORIGINAL_WIDTH);
        }
    };

    useEffect(() => {
        // Cleaning up references & memory upon app cleanup
        function cleanUp() {
            window.removeEventListener('resize', updateScale);
        }

        updateScale();
        window.addEventListener('resize', updateScale);
        return cleanUp;
    }, []);

    return (
    <div className="
        fixed 
        inset-0 
        flex 
        items-center 
        justify-center 
        z-50 
        bg-[--bg-dark]/70 
        backdrop-blur-md
    " 
    onClick={onCloseCallback}
    >
        <div
            ref={containerRef}
            className="
                relative 
                w-[90vw] 
                max-w-[1000px] 
                max-h-[80vh] 
                aspect-1000/585 
                bg-[--bg-light] 
                rounded-lg border 
                border-custom 
                shadow-custom 
                verflow-hidden
            "
            onClick={(e) => e.stopPropagation()}
        >
            <img
                src="/ExperienceMap.jpg"
                alt={"Live Map for server " + serverId}
                className="
                    absolute 
                    inset-0 
                    w-full 
                    h-full 
                    object-contain
                "
            />   

            {players.map((player) => (
                <PlayerDot
                    key={player.userId}
                    plrPosition={{ ...player, x: player.x * scale, y: player.y * scale }}
                    onClickCallback={() => null}
                />
            ))}
            <button
                className="
                    absolute 
                    top-4 
                    right-4 
                    bg-[--accent-blue] 
                    hover:bg-[--accent-blue-light] 
                    text-[--text-primary] 
                    p-2 
                    rounded-full 
                    font-bold
                "
                onClick={onCloseCallback}
            >
            ✕
            </button>
        </div>
    </div>
  );
}
