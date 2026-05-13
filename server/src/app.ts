import express from "express";
import cors from "cors";
import session from "express-session";

import passport from "./auth/passport.ts";

import userRouter from "./routes/user.ts";
import authRouter from "./routes/auth.ts";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/user", userRouter);
app.use("/auth", authRouter);

export default app;
