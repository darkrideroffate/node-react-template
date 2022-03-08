import LabelsController from "../controllers/LabelsController";
import { Router } from "express";
import bearerToken from "express-bearer-token";
const LabelsRouter = Router();
LabelsRouter.use(bearerToken());
LabelsRouter.get("/:teamKey", LabelsController.labels);

export default LabelsRouter;
