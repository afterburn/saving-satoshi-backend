import express from "express";

const router = express.Router();

router.get("/api/login", async (req, res) => {
  res.status(200).json({});
});

export default router;
