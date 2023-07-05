import express from "express";
import {
  getAllLines,
  getLine,
  postLine,
  getStops,
} from "../controller/line-controller.js";

const router = express.Router();

router.route("/").get(getAllLines);
router.route("/").post(postLine);
router.route("/stops").get(getStops);
router.route("/:id").get(getLine);

export default router;
