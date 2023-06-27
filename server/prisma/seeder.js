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

async function createStatusNoteIfNotExists(statusNoteData) {
  const existingStatusNote = await prisma.status.findFirst({
    where: { name: statusNoteData.name },
  });

  if (!existingStatusNote) {
    await prisma.status.create({ data: statusNoteData });
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

async function createRoleIfNotExists(roleData) {
  const existingRole = await prisma.role.findFirst({
    where: { name: roleData.name },
  });

  if (!existingRole) {
    await prisma.role.create({ data: roleData });
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
    { name: 'SUPPORT' },
    { name: 'AUTRE' },
  ];
  const statusNotes = [
    { name: 'NOUVEAU'},
    { name: 'EN_ATTENTE'},
    { name: 'EN_COURS'},
    { name: 'RESOLU'},
    { name: 'FERME'}
  ];
  const roles = [
    { name: 'USER' },
    { name: 'CHEF' },
  ];

  for (const typeNoteData of typeNotes) {
    await createTypeNoteIfNotExists(typeNoteData);
  }
  for (const statusNoteData of statusNotes) {
    await createStatusNoteIfNotExists(statusNoteData);
  }
  for (const roleData of roles) {
    await createRoleIfNotExists(roleData);
  }

  // Create users
  const users = [
    {
      email: 'jimmy@gmail.com',
      password: 'password1',
      name: 'JimmyD',
    },
    {
      email: 'chef@gmail.com',
      password: 'password2',
      name: 'Chef',
      roleId: 2,
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
      statusId: 1,
      typeNoteId: 1,
      authorId: 1,
      affectedUserId: 2,
    },
    {
      title: 'Ticket 2',
      content: 'Ticket 2 content',
      priority: 2,
      statusId: 2,
      typeNoteId: 2,
      authorId: 2,
      affectedUserId: 1,
    },
    {
      title: 'Ticket 3',
      content: 'Ticket 3 content',
      priority: 2,
      statusId: 3,
      typeNoteId: 2,
      authorId: 2,
      affectedUserId: 1,
    },
    {
      title: 'Ticket 4',
      content: 'Ticket 4 content',
      priority: 2,
      statusId: 3,
      typeNoteId: 2,
      authorId: 2,
      affectedUserId: 1,
    },
    {
      title: 'Ticket 5',
      content: 'Ticket 5 content',
      priority: 2,
      statusId: 3,
      typeNoteId: 2,
      authorId: 2,
      affectedUserId: 1,
    },
    {
      title: 'Ticket 6',
      content: 'Ticket 6 content',
      priority: 2,
      statusId: 3,
      typeNoteId: 2,
      authorId: 2,
      affectedUserId: 1,
    },
    {
      title: 'Ticket 7',
      content: 'Ticket 7 content',
      priority: 2,
      statusId: 3,
      typeNoteId: 2,
      authorId: 2,
      affectedUserId: 1,
    },
    {
      title: 'Ticket 8',
      content: 'Ticket 8 content',
      priority: 2,
      statusId: 3,
      typeNoteId: 2,
      authorId: 2,
      affectedUserId: 1,
    },
    {
      title: 'Ticket 9',
      content: 'Ticket 9 content',
      priority: 2,
      statusId: 3,
      typeNoteId: 2,
      authorId: 2,
      affectedUserId: 1,
    },
    {
      title: 'Ticket 10',
      content: 'Ticket 10 content',
      priority: 2,
      statusId: 3,
      typeNoteId: 2,
      authorId: 2,
      affectedUserId: 1,
    },
    {
      title: 'Ticket 11',
      content: 'Ticket 11 content',
      priority: 2,
      statusId: 3,
      typeNoteId: 2,
      authorId: 2,
      affectedUserId: 1,
    },
    {
      title: 'Ticket 12',
      content: 'Ticket 12 content',
      priority: 2,
      statusId: 3,
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
