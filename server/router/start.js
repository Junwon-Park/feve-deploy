import express from 'express';
import { body } from 'express-validator';
import { start } from '../controller/start.js';

const router = express.Router();

router.get('/', start);

export default router;
