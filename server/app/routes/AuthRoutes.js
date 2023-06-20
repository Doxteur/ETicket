import { Router as router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

import { signToken } from "../utils/authUtils.js";

const prisma = new PrismaClient();

export default router()
  .post("/login", async (req, res) => {
    try {
      if (!req.body?.email || !req.body?.password) {

        return res.status(400).json({ error: "Missing email or password" });
      }
      const user = await prisma.user.findUnique({
        where: {
          email: req.body.email,
        },
      });
      if (!user) {
        return res.status(401).json({ error: "L'utilisateur n'éxiste pas" });
      }
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).json({ error: "Mauvais mot de passe" });
      }
      const token = await signToken(user);

      res.json({
        user,
        message: "Utilisateur connecté avec succès",
        token,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  })
  .post("/register", async (req, res) => {
    try {
      if (!req.body?.email || !req.body?.password) {
        return res.status(400).json({ message: "Missing email or password" });
      }
      const user = await prisma.user.findUnique({
        where: {
          email: req.body.email,
        },
      });
      if (user) {
        return res.status(409).json({ message: "User already exists" });
      }
      const newUser = await prisma.user.create({
        data: {
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 8),
        },
      });
      const token = signToken(newUser);

      res.json({
        user,
        message: "Utilisateur créé avec succès",
        token,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  })
  .get("/me", async (req, res) => {
    try {
      // use user token to find user
      const user = await prisma.user.findUnique({
        where: {
          id: req.body.userId ,
        },
        include: {
          affectedNotes: true,
        },
      });
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  })
  .get("/createtestuser", async (req, res) => {
    try {
      const user = await prisma.user.create({
        data: {
          email: "test@gmail.com",
          password: bcrypt.hashSync("test", 8),
        },
      });
      res.json({ message: "User Created" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

