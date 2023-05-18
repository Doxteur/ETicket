import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function createTypeNoteIfNotExists(typeNoteData) {
  const existingTypeNote = await prisma.typeNote.findFirst({
    where: { name: typeNoteData.name },
  });

  if (!existingTypeNote) {
    await prisma.typeNote.create({ data: typeNoteData });
  }
}

async function createUserIfNotExists(userData) {
  const existingUser = await prisma.user.findFirst({
    where: { email: userData.email },
  });

  if (!existingUser) {
    userData.password = await bcrypt.hash(userData.password, 10);
    await prisma.user.create({ data: userData });
  }
}

async function createTicket(ticketData) {
  await prisma.ticket.create({ data: ticketData });
}

async function main() {
  // Create type notes
  const typeNotes = [
    { name: 'BUG' },
    { name: 'FEATURE' },
    { name: 'AUTRE' },
  ];

  for (const typeNoteData of typeNotes) {
    await createTypeNoteIfNotExists(typeNoteData);
  }

  // Create users
  const users = [
    {
      email: 'user1@example.com',
      password: 'password1',
      name: 'User 1',
    },
    {
      email: 'user2@example.com',
      password: 'password2',
      name: 'User 2',
    },
  ];

  for (const userData of users) {
    await createUserIfNotExists(userData);
  }

  // Create tickets
  const tickets = [
    {
      title: 'Ticket 1',
      content: 'Ticket 1 content',
      priority: 1,
      typeNoteId: 1,
      authorId: 1,
      affectedUserId: 2,
    },
    {
      title: 'Ticket 2',
      content: 'Ticket 2 content',
      priority: 2,
      typeNoteId: 2,
      authorId: 2,
      affectedUserId: 1,
    },
    {
      title: 'Ticket 3',
      content: 'Ticket 3 content',
      priority: 2,
      typeNoteId: 2,
      authorId: 2,
      affectedUserId: 1,
    },
  ];

  for (const ticketData of tickets) {
    await createTicket(ticketData);
  }

  console.log('Reseed completed successfully!');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
