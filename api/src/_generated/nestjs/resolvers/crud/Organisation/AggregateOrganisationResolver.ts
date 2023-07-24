import * as NestJS from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateOrganisationArgs } from "./args/AggregateOrganisationArgs";
import { Organisation } from "../../../models/Organisation";
import { AggregateOrganisation } from "../../outputs/AggregateOrganisation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@NestJS.Resolver(_of => Organisation)
export class AggregateOrganisationResolver {
  @NestJS.Query(_returns => AggregateOrganisation, {
    nullable: false
  })
  async aggregateOrganisation(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: AggregateOrganisationArgs): Promise<AggregateOrganisation> {
    return getPrismaFromContext(ctx).organisation.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
