import express from "express";
import prisma from "./lib/prisma";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

export default app;
