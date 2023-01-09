"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const regions_route_1 = __importDefault(require("./routes/regions.route"));
const prov_route_1 = __importDefault(require("./routes/prov.route"));
dotenv_1.default.config({ path: "./config.env" });
const morgan = require("morgan");
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(morgan("dev"));
app.use('/api/v1/regions', prov_route_1.default);
app.use('/api/v1/regions', regions_route_1.default);
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
