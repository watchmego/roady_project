import * as NestJS from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneOrganisationArgs } from "./args/UpdateOneOrganisationArgs";
import { Organisation } from "../../../models/Organisation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@NestJS.Resolver(_of => Organisation)
export class UpdateOneOrganisationResolver {
  @NestJS.Mutation(_returns => Organisation, {
    nullable: true
  })
  async updateOneOrganisation(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: UpdateOneOrganisationArgs): Promise<Organisation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organisation.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
