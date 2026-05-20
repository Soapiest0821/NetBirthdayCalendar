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
    failureRedirect: "/auth/failure",
    session: true,
  }),
  (req, res) => {
    console.log("콜백 힛");
    console.log(req.user);

    const redirect = (req.query.state as string) || "/";
    console.log("session:", req.session);
    console.log("user:", req.user);
    res.redirect(`http://localhost:5173${redirect}`);
  },
);

router.get("/failure", (req, res) => {
  res.send("로그인 실패!");
});

export default router;
