import "dotenv/config";
import app from "./config/express";
import express, { NextFunction, Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { HttpException } from "./HttpException";
//client-routes
if (process.env.NODE_ENV === "development") {
  app.use(
    "/**",
    createProxyMiddleware({
      target: "http://localhost:3000",
      changeOrigin: true,
    })
  );
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/client-build"));
  app.get("/*", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/client-build/index.html");
  });
}
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpException) {
    res.status(err.status);
    res.send({ message: err.message, status: err.status });
  }
  next(err);
});
app.listen(process.env.PORT, () => {
  console.log(`app running on port ${process.env.PORT}`);
});
