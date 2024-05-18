import express from 'express';
import { pageGetLiqour, pageUpdateLiqour } from '../controllers/liqour.controller';
import { verifyJWT } from '../../api/controllers/auth.controller';

const router = express.Router();

router.get('/', verifyJWT, pageGetLiqour);
router.get('/edit/:id', verifyJWT, pageUpdateLiqour);

export default router;