import express from "express";
import cors from "cors";
import RootRouter from "../routes/RootRouter";
import morgan from "morgan";
import helmet from "helmet";
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use(RootRouter);

export default app;
