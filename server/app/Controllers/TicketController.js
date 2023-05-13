import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getTickets = async (req, res) => {
  const userId = req.userId;

  const tickets = await prisma.ticket.findMany({
    where: {
      OR: [
        {
          affectedUserId: userId,
        },
        {
          authorId: userId,
        },
      ],
    },
  });
  res.json(tickets);
};

const addTicket = async (req, res) => {
  const userId = req.userId;
  const { title, content, typeNote } = req.body;

  const ticket = await prisma.ticket.create({
    data: {
      title: title,
      content: content,
      typeNote: {
        connect: {
          id: typeNote,
        },
      },
      author: {
        connect: {
          id: userId,
        },
      },
      affectedUser: {
        connect: {
          id: userId,
        },
      },
      priority: 1,
    },
  });
  res.json(ticket);
};

const assignTicket = async (req, res) => {
  const { ticketId, newAffectedUserId } = req.body;
  if (!ticketId || !newAffectedUserId)
    return res.status(400).json({ message: "Missing fields" });

  const ticket = await prisma.ticket.update({
    where: {
      id: ticketId,
    },
    data: {
      affectedUser: {
        connect: {
          id: newAffectedUserId,
        },
      },
    },
  });
  res.json(ticket);
};

const changeStatus = async (req, res) => {
  const { ticketId, status } = req.body;
  // check if their is a ticketId and status but status can be 0
  if (!ticketId || status === undefined)
    return res.status(400).json({ message: "Missing fields" });

  const response = await prisma.ticket.update({
    where: {
      id: ticketId,
    },
    data: {
      status: status,
    },
  });

  res.json(response);
};

export { getTickets, addTicket, assignTicket, changeStatus };
