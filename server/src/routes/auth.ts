import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/google", (req, res, next) => {
  const redirect = req.query.redirect as string;

  passport.authenticate("google", {
    scope: ["profile", "email"],
    state: redirect,
  })(req, res, next);
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    const redirect = req.query.state || "/";

    res.redirect(`http://localhost:5173${redirect}`);
  },
);

export default router;
