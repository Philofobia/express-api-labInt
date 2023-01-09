import express from 'express'
import { getAllProv, getProv } from '../controller/prov.controller';
import checkRegId from '../middleware/checkRegId';
import checkProvId from '../middleware/checkProvId';

const provRouter = express.Router();

provRouter.route('/:region/prov')
    .get(checkRegId, getAllProv)

provRouter.route('/:region/prov/:prov')
    .get(checkRegId, checkProvId, getProv)

export default provRouter;