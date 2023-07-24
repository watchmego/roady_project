import * as NestJS from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateOrganisationArgs } from "./args/AggregateOrganisationArgs";
import { CreateManyOrganisationArgs } from "./args/CreateManyOrganisationArgs";
import { CreateOneOrganisationArgs } from "./args/CreateOneOrganisationArgs";
import { DeleteManyOrganisationArgs } from "./args/DeleteManyOrganisationArgs";
import { DeleteOneOrganisationArgs } from "./args/DeleteOneOrganisationArgs";
import { FindFirstOrganisationArgs } from "./args/FindFirstOrganisationArgs";
import { FindFirstOrganisationOrThrowArgs } from "./args/FindFirstOrganisationOrThrowArgs";
import { FindManyOrganisationArgs } from "./args/FindManyOrganisationArgs";
import { FindUniqueOrganisationArgs } from "./args/FindUniqueOrganisationArgs";
import { FindUniqueOrganisationOrThrowArgs } from "./args/FindUniqueOrganisationOrThrowArgs";
import { GroupByOrganisationArgs } from "./args/GroupByOrganisationArgs";
import { UpdateManyOrganisationArgs } from "./args/UpdateManyOrganisationArgs";
import { UpdateOneOrganisationArgs } from "./args/UpdateOneOrganisationArgs";
import { UpsertOneOrganisationArgs } from "./args/UpsertOneOrganisationArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Organisation } from "../../../models/Organisation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateOrganisation } from "../../outputs/AggregateOrganisation";
import { OrganisationGroupBy } from "../../outputs/OrganisationGroupBy";

@NestJS.Resolver(_of => Organisation)
export class OrganisationCrudResolver {
  @NestJS.Query(_returns => AggregateOrganisation, {
    nullable: false
  })
  async aggregateOrganisation(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: AggregateOrganisationArgs): Promise<AggregateOrganisation> {
    return getPrismaFromContext(ctx).organisation.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @NestJS.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyOrganisation(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: CreateManyOrganisationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organisation.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @NestJS.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyOrganisation(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: DeleteManyOrganisationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organisation.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @NestJS.Mutation(_returns => Organisation, {
    nullable: true
  })
  async deleteOneOrganisation(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: DeleteOneOrganisationArgs): Promise<Organisation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organisation.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @NestJS.Query(_returns => [Organisation], {
    nullable: false
  })
  async organisations(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: FindManyOrganisationArgs): Promise<Organisation[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organisation.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @NestJS.Query(_returns => Organisation, {
    nullable: true
  })
  async organisation(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: FindUniqueOrganisationArgs): Promise<Organisation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organisation.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @NestJS.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyOrganisation(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: UpdateManyOrganisationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organisation.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @NestJS.Mutation(_returns => Organisation, {
    nullable: false
  })
  async upsertOneOrganisation(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: UpsertOneOrganisationArgs): Promise<Organisation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).organisation.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
