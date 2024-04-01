import express from 'express';
import { registerUser , loginUser } from '../controller/user.controller.js';




const router = express.Router();
router.route('/login').post(loginUser);
// router.route('/logout');
router.route('/register').post(registerUser);

export default router;