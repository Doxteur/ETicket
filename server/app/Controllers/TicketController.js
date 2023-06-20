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
    include: {
      author: {
        select: {
          id: true,
          name: true,
        },
      },
      affectedUser: {
        select: {
          id: true,
          name: true,
        },
      },
      typeNote: {
        select: {
          id: true,
          name: true,
        },
      },
      status: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      priority: "asc",
    },
  });
  return tickets;
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
const updateTicket = async (req, res) => {
  console.log(req.body.value);
  const { id, title, content, typeNoteId, priority, statusId, affectedUserId } =
    req.body.value;
  const priorityInt = parseInt(priority);
  const statusInt = parseInt(statusId);

  try {
    const ticket = await prisma.ticket.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        content: content,
        priority: priorityInt,
        status: {
          connect: {
            id: statusInt,
          },
        },
        affectedUser: {
          connect: {
            id: affectedUserId,
          },
        },
        typeNote: {
          connect: {
            id: typeNoteId,
          },
        },
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Ticket not updated",
      error: err,
    });
  }

  res.json({
    message: "Ticket updated",
  });
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

const deleteTicket = async (req, res) => {
  const { ticketId } = req.body;
  if (!ticketId) return res.status(400).json({ message: "Missing fields" });

  const response = await prisma.ticket.delete({
    where: {
      id: ticketId,
    },
  });

  res.json(response);
};

export {
  getTickets,
  addTicket,
  assignTicket,
  changeStatus,
  deleteTicket,
  updateTicket,
};
