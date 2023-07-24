import * as NestJS from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstOrganisationOrThrowArgs } from "./args/FindFirstOrganisationOrThrowArgs";
import { Organisation } from "../../../models/Organisation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@NestJS.Resolver(_of => Organisation)
export class FindFirstOrganisationOrThrowResolver {
  @NestJS.Query(_returns => Organisation, {
    nullable: true
  })
  async findFirstOrganisationOrThrow(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: FindFirstOrganisationOrThrowArgs): Promise<Organisation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organisation.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
