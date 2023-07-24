
Model is defined in `schema.prisma` - see https://www.prisma.io/

Database link is defined in `.env`

Steps to get running:

1. `yarn`
2. `yarn migrate` if you have changed model
3. `yarn generate` will generate CRUD
4. `yarn reset` will reset database, generate code and run `seed.ts`
5. `yarn start` will start application on localhost:3000

http://localhost:3000 should show `API is running`

http://localhost:3000/graphql will launch GraphQL explorer

query {
  organisations {
    name
    users {
      name
      email
    }
  }
}

will show your seed data

