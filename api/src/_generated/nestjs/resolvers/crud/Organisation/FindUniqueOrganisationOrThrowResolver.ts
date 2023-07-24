import * as NestJS from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueOrganisationOrThrowArgs } from "./args/FindUniqueOrganisationOrThrowArgs";
import { Organisation } from "../../../models/Organisation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@NestJS.Resolver(_of => Organisation)
export class FindUniqueOrganisationOrThrowResolver {
  @NestJS.Query(_returns => Organisation, {
    nullable: true
  })
  async getOrganisation(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: FindUniqueOrganisationOrThrowArgs): Promise<Organisation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organisation.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
