"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProv = exports.getAllProv = void 0;
const provs_1 = require("../data/provs");
const getAllProv = (req, res) => {
    const regId = +req.params.region;
    const provs = provs_1.provsItaly.find((el) => el.regId === regId);
    res.status(200).json({
        status: "success",
        results: provs_1.provsItaly.length,
        data: {
            provs: provs,
        },
    });
};
exports.getAllProv = getAllProv;
const getProv = (req, res) => {
    const regId = +req.params.region;
    const provId = +req.params.prov;
    const provs = provs_1.provsItaly.find((el) => el.regId === regId);
    const prov = provs === null || provs === void 0 ? void 0 : provs.prov.find((el) => el.id === provId);
    res.status(200).json({
        status: "success",
        data: {
            prov,
        },
    });
};
exports.getProv = getProv;
