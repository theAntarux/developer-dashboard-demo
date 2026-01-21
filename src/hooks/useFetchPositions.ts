import { useCallback, useEffect } from "react";
import { plrPositionStore } from "@/stores/plrPositionsStore";
import type { GlobalPositions } from "@/types/plrPositions.types";
import { POSITION_TOKEN } from "@/config/env";
import { REFRESH_TIME } from "@/config/behavior";

export function useFetchPositions() {
    const { setPositions } = plrPositionStore();

    // Fetches data in json format from the positions endpoint, wrapped in callback for rerender stability haha (tbf doesn't need to)
    const fetchPositions = useCallback(async () => {
        try {
            const response = await fetch("http://localhost:3000/game/v1/get-positions", {
                headers: { Authorization: `Bearer ${POSITION_TOKEN}` },
            });

            if (!response.ok) {
                return;
            }

            const newData = await response.json();
            if (newData && typeof newData === 'object' && !Array.isArray(newData)) {
                setPositions(newData as GlobalPositions);
            }
        } catch (error) {
            console.error('Fetch failed:', error);
        }
    }, [setPositions])
    
    useEffect(() => {
        // Cleaning up references & memory upon app cleanup
        function cleanUp() {
            clearInterval(interval);
        }

        fetchPositions();
        const interval = setInterval(fetchPositions, REFRESH_TIME);

        return cleanUp;
    }, [fetchPositions]);
}
