import express from 'express';
import { verifyJWT } from '../middleware/auth.middleware.js';
import { sendMessage } from '../controller/message.controller.js';
const router = express.Router();

router.route("/send/:id").post(verifyJWT,sendMessage);

export default router;