import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const registerToken = async (req, res) => {
  const userId = req.userId;
  const { token } = req.body;

  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      token: token,
    },
  });

  return user;
};
