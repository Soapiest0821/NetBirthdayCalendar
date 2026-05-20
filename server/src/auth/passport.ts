import type { User } from "../types/User.ts";

import passport from "passport";
import prisma from "../lib/prisma.ts";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import dotenv from "dotenv";
dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      if (!profile.emails?.[0]?.value) return done(null, false);

      const googleId = profile.id;
      const email = profile.emails[0].value;

      try {
        let user = await prisma.user.findUnique({ where: { googleId } });

        if (!user) {
          user = await prisma.user.findUnique({ where: { email } });

          if (user) {
            user = await prisma.user.update({
              where: { email },
              data: { googleId },
            });
          } else {
            user = await prisma.user.create({
              data: {
                email,
                googleId,
                nickname: profile.displayName,
                birthMonth: 0,
                birthDate: 0,
                memo: "",
              },
            });
          }
        }

        return done(null, user);
      } catch (e) {
        console.error("prisma 에러:", e);
        return done(null, false);
      }
    },
  ),
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  } catch (e) {
    done(e, null);
  }
});

export default passport;
