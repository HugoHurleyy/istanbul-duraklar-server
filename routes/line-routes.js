import express from 'express';
import {
  createLine,
  deleteLine,
  getAllLines,
  getLine,
} from '../controller/line-controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getAllLines).post(auth, createLine);
router.route('/:id').get(getLine).delete(auth, deleteLine);

export default router;