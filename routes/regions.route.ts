import express from 'express'
import { getAllRegion, getRegion } from '../controller/regions.controller';
import checkRegId from '../middleware/checkRegId';

const regionsRouter = express.Router();

regionsRouter.route('/')
    .get(getAllRegion)

regionsRouter.route('/:region')
    .get(checkRegId, getRegion)

export default regionsRouter;