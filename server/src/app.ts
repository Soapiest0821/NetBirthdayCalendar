import express from "express";
import cors from "cors";
import userRouter from "./routes/user.ts";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/users", userRouter);

export default app;
