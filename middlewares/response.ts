import { NextFunction, Response, Request } from "express";

export const responseMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.sendFormat = (data: any = {}, message = "success", status = 200) => {
    res.send({
      status: status,
      message,
      data,
    });
  };
  next();
};
