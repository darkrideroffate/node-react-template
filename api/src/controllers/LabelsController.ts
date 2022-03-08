import { RequestHandler, Request, response } from "express";
interface Controller {
  labels: RequestHandler<{ teamKey: string }>;
}

const LabelsController: Controller = {
  labels: async (request, response, next) => {
    try {
      if (!request.token) {
        throw new Error("No api Key");
      }

      return response.send("Hello");
    } catch (error) {
      next(error);
    }
  },
};

export default LabelsController;
