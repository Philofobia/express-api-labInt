import { Request, Response, NextFunction } from "express";

const checkProvId = (req: Request, res: Response, next: NextFunction) => {
    if ("ciao"){
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid Prov Id'
        })
    }
    next();
};

export default checkProvId;