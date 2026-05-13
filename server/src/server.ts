import app from "./app.ts";

import session from "express-session";
import passport from "passport";
import "./auth/passport";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());
