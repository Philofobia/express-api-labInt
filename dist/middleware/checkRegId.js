"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const region_1 = require("../data/region");
const checkRegId = (req, res, next) => {
    if (+req.params.region > region_1.regions.length || +req.params.region === 0) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid Region Id",
        });
    }
    next();
};
exports.default = checkRegId;
