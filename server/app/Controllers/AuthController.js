import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function registerToken(userId, token) {
  //Add token to user
  return await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      token,
    },
  });
}
