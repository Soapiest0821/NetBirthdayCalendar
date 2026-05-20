import { Router } from "express";
import prisma from "../lib/prisma.ts";

const router = Router();

const err500 = (err: any, res: any) => {
  console.error(err);
  res.status(500).json({ error: "서버 오류 in routes/user.ts" });
};

// 유저 생성
router.post("/", async (req, res) => {
  try {
    if (!req.user) {
      const message = "로그인 안됨";
      console.log(message);
      return res.status(401).json({ message });
    }

    if (!req.user.googleId) {
      const message = "구글 로그인 다시";
      console.log(message);
      return res.status(401).json({ message });
    }

    const {
      /*email, */ googleId /* , nickname, birthMonth, birthDate, memo*/,
    } = req.user;
    // if (
    //   !email ||
    //   !googleId ||
    //   !nickname ||
    //   !birthMonth ||
    //   !birthDate ||
    //   !memo
    // ) {
    //   return res.status(400).json({ error: "필수값 없음" });
    // }

    const existingUser = await prisma.user.findUnique({
      where: { googleId },
    });

    if (existingUser) {
      return res.json(existingUser);
    }

    return res.json(null);
  } catch (err) {
    err500(err, res);
  }
});

router.get("/", async (req, res) => {
  try {
    if (!req.user) {
      const message = "로그인 안됨 get";
      console.log(message);
      return res.status(401).json({ message });
    }

    if (!req.user.googleId) {
      const message = "구글 로그인 다시 get";
      console.log(message);
      return res.status(401).json({ message });
    }

    const {
      /*email, */ googleId /* , nickname, birthMonth, birthDate, memo*/,
    } = req.user;
    const firstUser = await prisma.user.findUnique({
      where: { googleId },
    });
    res.json(firstUser);
  } catch (err) {
    err500(err, res);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return res.status(404).json({ error: "유저 없음" });
    }

    res.json(user);
  } catch (err) {
    err500(err, res);
  }
});

export default router;
