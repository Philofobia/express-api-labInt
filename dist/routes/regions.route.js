"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const regions_controller_1 = require("../controller/regions.controller");
const checkRegId_1 = __importDefault(require("../middleware/checkRegId"));
const regionsRouter = express_1.default.Router();
regionsRouter.route('/')
    .get(regions_controller_1.getAllRegion);
regionsRouter.route('/:region')
    .get(checkRegId_1.default, regions_controller_1.getRegion);
exports.default = regionsRouter;
