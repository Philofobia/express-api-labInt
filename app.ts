import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import regionsRouter from "./routes/regions.route";
import provRouter from "./routes/prov.route";


dotenv.config({ path: "./config.env" });

const morgan = require("morgan");
const cors = require('cors')
const app: Express = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(cors())

app.use('/api/v1/regions', provRouter);
app.use('/api/v1/regions', regionsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
