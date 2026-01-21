import dotenv from "dotenv";

dotenv.config();

export const POSITION_TOKEN = process.env.POSITION_TOKEN;

if (!POSITION_TOKEN) {
    throw new Error("POSITION_TOKEN is not defined in enviroment variables.");
}
