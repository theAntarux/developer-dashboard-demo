import type { PlrPosition } from "@/types/plrPositions.types";
import DotPic from "@/assets/DotPic.png";

interface PlayerDotProps {
    plrPosition: PlrPosition,
    onClickCallback: () => null
};

export default function PlayerDot({plrPosition, onClickCallback}: PlayerDotProps) {
    return (
        <img
            src={DotPic}
            alt={"Player_" + plrPosition.userId.toString()}
            className="absolute cursor-pointer object-contain"
            style={{
                left: `${plrPosition.x}px`,
                top: `${plrPosition.y}px`,
                width: '16px',
                height: '16px',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
            }}
            onClick={onClickCallback}
        />
    );
}
