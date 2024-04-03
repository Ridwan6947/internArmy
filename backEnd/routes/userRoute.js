import express from 'express';
import { verifyJWT } from '../middleware/auth.middleware.js';
import {getUserForSidebar} from '../controller/user.controller.js'


const router = express.Router();

router.route("/").get(verifyJWT , getUserForSidebar);

export default router;