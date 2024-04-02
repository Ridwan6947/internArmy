import express from 'express';
import { registerUser , loginUser , logoutUser } from '../controller/user.controller.js';
import { verifyJWT } from '../middleware/auth.middleware.js';




const router = express.Router();
router.route('/login').post(loginUser);
router.route('/logout').post(verifyJWT , logoutUser);
router.route('/register').post(registerUser);

export default router;