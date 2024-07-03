import express from "express";
import { biteService } from "./bite-service";

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
  return res.json(createdBite);
});

router.get("/:id", async (req, res, next) => {
  const createdBite = await biteService.getSingleBite(req.params.id);
  return res.json(createdBite);
});

router.delete("/:id", async (req, res, next) => {
  const createdBite = await biteService.removeBite(req.params.id);
  return res.json(createdBite);
});

router.put("/:id", async (req, res, next) => {
  const biteToModify = req.params.id;
  if (biteToModify !== req.body.id) {
    return next(new Error("Invalid request."));
  }
  const createdBite = await biteService.updateBite(req.params.id, req.body);
  return res.json(createdBite);
});

export default router;
