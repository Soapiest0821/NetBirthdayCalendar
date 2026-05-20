import express from "express";
import cors from "cors";
import session from "express-session";

import passport from "./auth/passport.ts";

import userRouter from "./routes/user.ts";
import authRouter from "./routes/auth.ts";

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    },
  }),
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/user", userRouter);
app.use("/auth", authRouter);

export default app;
