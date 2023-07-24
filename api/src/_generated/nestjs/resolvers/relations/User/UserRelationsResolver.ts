import * as NestJS from "@nestjs/graphql";
import { Organisation } from "../../../models/Organisation";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@NestJS.Resolver(_of => User)
export class UserRelationsResolver {
  @NestJS.ResolveField(_type => Organisation, {
    nullable: true
  })
  async organisation(@NestJS.Root() user: User, @NestJS.Context() ctx: any): Promise<Organisation | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).organisation({});
  }
}
