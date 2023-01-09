"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prov_controller_1 = require("../controller/prov.controller");
const checkRegId_1 = __importDefault(require("../middleware/checkRegId"));
const checkProvId_1 = __importDefault(require("../middleware/checkProvId"));
const provRouter = express_1.default.Router();
provRouter.route('/:region/prov')
    .get(checkRegId_1.default, prov_controller_1.getAllProv);
provRouter.route('/:region/prov/:prov')
    .get(checkRegId_1.default, checkProvId_1.default, prov_controller_1.getProv);
exports.default = provRouter;
