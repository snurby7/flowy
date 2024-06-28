const express = require("express");
const biteService = require("../services/bite-service");

const router = express.Router();

/**
 * We are living off of /v1/bites for all of these.
 */
router.get("/", (req, res) => {
  const bites = biteService.getBites();
  return res.json(bites);
});
router.post("/", (req, res) => {
  biteService.addBite(req.body);
});

module.exports = router;
