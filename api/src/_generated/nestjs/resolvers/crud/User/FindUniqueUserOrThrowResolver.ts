import * as NestJS from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserOrThrowArgs } from "./args/FindUniqueUserOrThrowArgs";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@NestJS.Resolver(_of => User)
export class FindUniqueUserOrThrowResolver {
  @NestJS.Query(_returns => User, {
    nullable: true
  })
  async getUser(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: FindUniqueUserOrThrowArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
