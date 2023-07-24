import { OrganisationRelationsResolver } from "./Organisation/OrganisationRelationsResolver";
import { UserRelationsResolver } from "./User/UserRelationsResolver";
import { Module } from "@nestjs/common";

export { OrganisationRelationsResolver } from "./Organisation/OrganisationRelationsResolver";
export { UserRelationsResolver } from "./User/UserRelationsResolver";

@Module({
  providers: [
    OrganisationRelationsResolver,
    UserRelationsResolver
  ]
})
export class RelationsResolversModule {
}
