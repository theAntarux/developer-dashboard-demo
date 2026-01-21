export const POSITION_TOKEN = import.meta.env.VITE_POSITION_TOKEN;

if (!POSITION_TOKEN) {
    throw new Error("POSITION_TOKEN is not defined in enviroment variables.");
}
