import express from "express";
import { biteService } from "../services/bites/bite-service";

const router = express.Router();

/**
 * We are living off of /v1/bites for all of these.
 */
router.get("/", (req, res) => {
  const bites = biteService.getBites();
  return res.json(bites);
});
router.post("/", async (req, res, next) => {
  const createdBite = await biteService.addBite(req.body);
  next(Error("Not done yet - please hold on"));
});

export default router;
