import express from "express";
import { getAllLines, getLine } from "../controller/line-controller.js";
import auth from "../middleware/auth.js";
import { limitResult } from "../middleware/limit-result.js";

const router = express.Router();

router.route("/").get(getAllLines);
router.route("/:id").get(getLine);

export default router;
