import * as NestJS from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { User } from "../../../models/User";
import { AggregateUser } from "../../outputs/AggregateUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@NestJS.Resolver(_of => User)
export class AggregateUserResolver {
  @NestJS.Query(_returns => AggregateUser, {
    nullable: false
  })
  async aggregateUser(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: AggregateUserArgs): Promise<AggregateUser> {
    return getPrismaFromContext(ctx).user.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
