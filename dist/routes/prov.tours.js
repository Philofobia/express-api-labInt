"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const provController = require('../controller/prov.controller');
const provRouter = express_1.default.Router();
provRouter.route('/api/v1/regions/:region/prov')
    .get(provController.getAllProv);
provRouter.route('/api/v1/regions/:region/prov/:prov')
    .get(provController.getProv);
module.exports = provRouter;
