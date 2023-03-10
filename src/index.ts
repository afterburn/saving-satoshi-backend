require("dotenv").config();

import express from "express";
import Database from "./database";
import apiRoutes from "./api";

const port = process.env.PORT || 3001;

const db = new Database();

const app = express();

app.use("/api", apiRoutes);

app.get("/", async (req, res) => {
  try {
    const client = await db.getClient();

    await client.begin();
    const result = await client.query("SELECT * FROM accounts");
    await client.commit();
    client.release();

    res.status(200).json(result.rows);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
});

app.listen(port || 3001, () => {
  console.log(`listening on http://localhost:${port}`);
});
