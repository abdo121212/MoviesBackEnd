import express from "express";
import { connetedBD } from "./DB/connectDB.js";
import { appRouter } from "./app.router.js";
const app = express();
const port = 3000;
connetedBD();
appRouter(app, express);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
