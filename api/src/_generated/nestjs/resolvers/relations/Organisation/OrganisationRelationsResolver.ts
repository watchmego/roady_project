import * as NestJS from "@nestjs/graphql";
import { Organisation } from "../../../models/Organisation";
import { User } from "../../../models/User";
import { OrganisationUsersArgs } from "./args/OrganisationUsersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@NestJS.Resolver(_of => Organisation)
export class OrganisationRelationsResolver {
  @NestJS.ResolveField(_type => [User], {
    nullable: false
  })
  async users(@NestJS.Root() organisation: Organisation, @NestJS.Context() ctx: any, @NestJS.Args() args: OrganisationUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).organisation.findUnique({
      where: {
        id: organisation.id,
      },
    }).users(args);
  }
}
