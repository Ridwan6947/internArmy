import express from 'express';
import { verifyJWT } from '../middleware/auth.middleware.js';
import { sendMessage , getMessage } from '../controller/message.controller.js';
const router = express.Router();

router.route("/send/:id").post(verifyJWT,sendMessage);
router.route("/:id").get(verifyJWT,getMessage);

export default router;