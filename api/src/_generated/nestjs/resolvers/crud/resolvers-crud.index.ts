import { OrganisationCrudResolver } from "./Organisation/OrganisationCrudResolver";
import { UserCrudResolver } from "./User/UserCrudResolver";
import { Module } from "@nestjs/common";

export { OrganisationCrudResolver } from "./Organisation/OrganisationCrudResolver";
export { UserCrudResolver } from "./User/UserCrudResolver";

@Module({
  providers: [
    OrganisationCrudResolver,
    UserCrudResolver
  ]
})
export class CrudResolversModule {
}
