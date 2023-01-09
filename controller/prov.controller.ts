import { Request, Response } from "express";

import { provInt, provsItalyInt } from "../models/models";
import { provsItaly } from "../data/provs";

export const getAllProv = (req: Request, res: Response) => {
  const regId: number = +req.params.region;
  const provs: provsItalyInt | undefined = provsItaly.find(
    (el) => el.regId === regId
  );

  res.status(200).json({
    status: "success",
    results: provsItaly.length,
    data: {
      provs: provs,
    },
  });
};

export const getProv = (req: Request, res: Response) => {
  const regId: number = +req.params.region;
  const provId: number = +req.params.prov;
  const provs: provsItalyInt | undefined = provsItaly.find(
    (el) => el.regId === regId
  );
  const prov: provInt | undefined = provs?.prov.find((el) => el.id === provId);

  res.status(200).json({
    status: "success",
    data: {
      prov,
    },
  });
};
