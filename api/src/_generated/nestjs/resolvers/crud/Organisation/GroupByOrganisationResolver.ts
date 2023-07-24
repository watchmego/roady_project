import * as NestJS from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByOrganisationArgs } from "./args/GroupByOrganisationArgs";
import { Organisation } from "../../../models/Organisation";
import { OrganisationGroupBy } from "../../outputs/OrganisationGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@NestJS.Resolver(_of => Organisation)
export class GroupByOrganisationResolver {
  @NestJS.Query(_returns => [OrganisationGroupBy], {
    nullable: false
  })
  async groupByOrganisation(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: GroupByOrganisationArgs): Promise<OrganisationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organisation.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
