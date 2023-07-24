import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const createOrganisation = async ({ count = 1 }) => {
  for (let i = 0; i < count; i += 1) {
    const data = {
      name: faker.company.name(),
    };
    return prisma.organisation.create({ data });
  }
};

const createUser = async ({ count = 1, parentId = null }) => {
  for (let i = 0; i < count; i += 1) {
    const data = {
      email: faker.internet.email(),
      name: faker.name.firstName(),
      organisationId: parentId,
    };
    await prisma.user.create({ data });
  }
};

// ----------------------------

async function main() {
  // create org
  const organisation = await createOrganisation({ count: 1 });

  // create users
  await createUser({ count: 5, parentId: organisation.id });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
