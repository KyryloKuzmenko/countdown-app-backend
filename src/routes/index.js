import express from 'express';
import {
  getCounterData,
  resetCounter,
  startCounter,
} from "../controllers/counterController.js";
import { register } from "../controllers/registerController.js";
import { login, verifyToken } from "../controllers/loginController.js";
import { getHome } from '../controllers/mainController.js';

const router = express.Router();

// routes for register and login
router.post("/register", register);
router.post("/login", login);

// main page
router.get('/', getHome);

//routes for counter //protected routes
router.post('/start', verifyToken, startCounter);
router.delete('/reset', verifyToken, resetCounter);

// counter data
router.get('/data', getCounterData);

export default router;