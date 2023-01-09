"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegion = exports.getAllRegion = void 0;
const region_1 = require("../data/region");
const getAllRegion = (req, res) => {
    res.status(200).json({
        status: "success",
        result: region_1.regions.length,
        data: {
            regions: region_1.regions,
        },
    });
};
exports.getAllRegion = getAllRegion;
const getRegion = (req, res) => {
    const regId = +req.params.region;
    const region = region_1.regions.find((el) => el.id === regId);
    res.status(200).json({
        status: "success",
        data: {
            region,
        },
    });
};
exports.getRegion = getRegion;
