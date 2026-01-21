import { create } from "zustand";
import type { GlobalPositions, PlrPosition } from "@/types/plrPositions.types";

interface PositionStore {
  positions: GlobalPositions;
  selectedServer: string | null;
  selectedPlayer: PlrPosition | null;
  setPositions: (newPositions: GlobalPositions) => void;
  setSelectedServer: (serverId: string | null) => void;
  setSelectedPlayer: (player: PlrPosition | null) => void;
}

export const plrPositionStore = create<PositionStore>(
    (set) => ({
        positions: {},
        selectedServer: localStorage.getItem("selectedServer") || null,
        selectedPlayer: null,

        // Sets newly fetched positions
        setPositions: (newPositions) => set({ 
            positions: newPositions || {} 
        }),

        // Sets currently selected server
        setSelectedServer: (serverId) => {
            set({ selectedServer: serverId });
            if (serverId) {
                localStorage.setItem("selectedServer", serverId)
            } else {
                localStorage.removeItem("selectedServer")
            };
        },

        // Sets currently selected player
        setSelectedPlayer: (player) => set({ 
            selectedPlayer: player 
        }),
    })
);
