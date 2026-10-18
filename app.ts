import express, { type Express, type Request, type Response } from "express";
import cors from "cors";

const app: Express = express();

app.use(cors());

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello, World!");
});

export default app;