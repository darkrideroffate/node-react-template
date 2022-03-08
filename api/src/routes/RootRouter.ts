import { Router } from "express";
import LabelsRouter from "./LabelsRouter";

const ApiRouter = Router();
const RootRouter = Router();
ApiRouter.use("/labels", LabelsRouter);

RootRouter.use("/api", ApiRouter);
export default RootRouter;
