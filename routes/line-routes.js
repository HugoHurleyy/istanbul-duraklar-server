import express from 'express';
import {
  createLine,
  deleteLine,
  getAllLines,
  getLine,
  searchLines,
} from '../controller/line-controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getAllLines).post(auth, createLine);
router.get('/search', searchLines);
router.route('/:id').get(getLine).delete(auth, deleteLine);

export default router;
