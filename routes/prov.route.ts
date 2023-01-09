import express from 'express'
import { getAllProv, getProv } from '../controller/prov.controller';
import checkRegId from '../middleware/checkRegId';

const provRouter = express.Router();

provRouter.route('/:region/prov')
    .get(checkRegId, getAllProv)

provRouter.route('/:region/prov/:prov')
    .get(checkRegId, getProv)

export default provRouter;