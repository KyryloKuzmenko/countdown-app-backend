import express from 'express';
import {
  getCounterData,
  resetCounter,
  startCounter,
} from "../controllers/counterController.js";
import { getHome } from '../controllers/mainController.js';

const router = express.Router();

router.get('/', getHome);
router.post('/start', startCounter);
router.get('/data', getCounterData);
router.delete('/reset', resetCounter);

export default router;