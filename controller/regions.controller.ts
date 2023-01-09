import { Request, Response } from "express";
import { regions } from "../data/region";
import { RegioneInt } from "../models/models";

export const getAllRegion = (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    result: regions.length,
    data: {
      regions,
    },
  });
};

export const getRegion = (req: Request, res: Response) => {
  const regId: number = +req.params.region;
  const region: RegioneInt | undefined = regions.find((el) => el.id === regId);
  
  res.status(200).json({
    status: "success",
    data: {
      region,
    },
  });
};
