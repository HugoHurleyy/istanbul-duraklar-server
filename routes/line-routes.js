import express from "express";
import { getAllLines, getLine } from "../controller/line-controller.js";

const router = express.Router();

router.route("/").get(getAllLines);
router.route("/:id").get(getLine);

export default router;
