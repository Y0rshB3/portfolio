require('dotenv').config();
import express from 'express';
import * as resumeController from './controllers/resumeController';

const router = express.Router();

router.get('/resume', resumeController.getResume);

export default router;