import { Router } from "express";
import prisma from "../lib/prisma.ts";

const router = Router();

const err500 = (err: any, res: any) => {
  console.error(err);
  res.status(500).json({ error: "서버 에러" });
};

// 유저 생성
router.post("/", async (req, res) => {
  try {
    const { email, googleId, nickname, birthMonth, birthDate, memo } = req.body;

    if (
      !email ||
      !googleId ||
      !nickname ||
      !birthMonth ||
      !birthDate ||
      !memo
    ) {
      return res.status(400).json({ error: "필수값 없음" });
    }

    const existingUser = await prisma.user.findUnique({
      where: { googleId },
    });

    if (existingUser) {
      return res.json(existingUser);
    }

    const user = await prisma.user.create({
      data: {
        email,
        googleId,
        nickname,
        birthMonth,
        birthDate,
        memo,
      },
    });

    res.status(201).json(user);
  } catch (err) {
    err500(err, res);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
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
