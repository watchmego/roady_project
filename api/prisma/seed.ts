import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { fstat, writeFile } from 'fs';


const prisma = new PrismaClient();


const createOrganisation = async ({ count = 1 }) => {
  console.log(count);
  for (let i = 0; i < count; i += 1) {
    const data = {
      name: faker.company.name(),
    };
    console.log(data);
    await prisma.organisation.create({ data });
  }
  return prisma.organisation;
};

const createUser = async ({ count = 1, parentId = null }) => {
  for (let i = 0; i < count; i += 1) {
    const data = {
      email: faker.internet.email(),
      name: faker.person.firstName(),
      imageSmall: faker.image.urlLoremFlickr({width: 150, height: 112}),
      imageLarge: faker.image.urlLoremFlickr({width: 320, height: 240}),
      organisationId: parentId,
    };
    
    await prisma.user.create({ data });
  }
};

// ----------------------------

async function main() {
  // create org
  const organisation = await createOrganisation({ count: 5 });
  const organisationList = await organisation.findMany();

  // create users
  for(let i = 0; i < 5; i ++) {
    await createUser({ count: 5, parentId: organisationList[i].id });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
