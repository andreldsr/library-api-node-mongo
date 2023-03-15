import express from "express";
import conn from "./config/dbConnect.js";
import route from "./routes/index.js";


conn.on("error", console.log.bind(console, 'Connection error'));
conn.once("open", () => console.log('Connected Successfully'));

const app = express();
route(app)

export default app
