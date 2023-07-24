import * as NestJS from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstOrganisationArgs } from "./args/FindFirstOrganisationArgs";
import { Organisation } from "../../../models/Organisation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@NestJS.Resolver(_of => Organisation)
export class FindFirstOrganisationResolver {
  @NestJS.Query(_returns => Organisation, {
    nullable: true
  })
  async findFirstOrganisation(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: FindFirstOrganisationArgs): Promise<Organisation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organisation.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
