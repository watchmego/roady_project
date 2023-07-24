import * as NestJS from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneOrganisationArgs } from "./args/CreateOneOrganisationArgs";
import { Organisation } from "../../../models/Organisation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@NestJS.Resolver(_of => Organisation)
export class CreateOneOrganisationResolver {
  @NestJS.Mutation(_returns => Organisation, {
    nullable: false
  })
  async createOneOrganisation(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: CreateOneOrganisationArgs): Promise<Organisation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organisation.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
