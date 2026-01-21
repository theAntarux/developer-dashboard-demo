export type PlrPosition = {
    userId: number,
    x: number,
    y: number,
};

export type GlobalPositions = { 
    [key: string]: PlrPosition[] 
};

export type ReqPositionBody = {
    serverId: string,
    players: PlrPosition[]
};
