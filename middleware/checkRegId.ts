import { Request, Response, NextFunction } from "express";
import { regions } from "../data/region";

const checkRegId = (req: Request, res: Response, next: NextFunction) => {
  if (+req.params.region > regions.length || +req.params.region === 0) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid Region Id",
    });
  }
  next();
};

export default checkRegId;
