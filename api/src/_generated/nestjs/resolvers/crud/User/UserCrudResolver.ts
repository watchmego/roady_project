import * as NestJS from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { CreateManyUserArgs } from "./args/CreateManyUserArgs";
import { CreateOneUserArgs } from "./args/CreateOneUserArgs";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { DeleteOneUserArgs } from "./args/DeleteOneUserArgs";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { FindFirstUserOrThrowArgs } from "./args/FindFirstUserOrThrowArgs";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { FindUniqueUserOrThrowArgs } from "./args/FindUniqueUserOrThrowArgs";
import { GroupByUserArgs } from "./args/GroupByUserArgs";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { UpdateOneUserArgs } from "./args/UpdateOneUserArgs";
import { UpsertOneUserArgs } from "./args/UpsertOneUserArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUser } from "../../outputs/AggregateUser";
import { UserGroupBy } from "../../outputs/UserGroupBy";

@NestJS.Resolver(_of => User)
export class UserCrudResolver {
  @NestJS.Query(_returns => AggregateUser, {
    nullable: false
  })
  async aggregateUser(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: AggregateUserArgs): Promise<AggregateUser> {
    return getPrismaFromContext(ctx).user.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @NestJS.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUser(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: CreateManyUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @NestJS.Mutation(_returns => User, {
    nullable: false
  })
  async createOneUser(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: CreateOneUserArgs): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @NestJS.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUser(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: DeleteManyUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @NestJS.Mutation(_returns => User, {
    nullable: true
  })
  async deleteOneUser(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: DeleteOneUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @NestJS.Query(_returns => User, {
    nullable: true
  })
  async findFirstUser(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: FindFirstUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @NestJS.Query(_returns => User, {
    nullable: true
  })
  async findFirstUserOrThrow(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: FindFirstUserOrThrowArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @NestJS.Query(_returns => [User], {
    nullable: false
  })
  async users(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: FindManyUserArgs): Promise<User[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @NestJS.Query(_returns => User, {
    nullable: true
  })
  async user(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: FindUniqueUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @NestJS.Query(_returns => [UserGroupBy], {
    nullable: false
  })
  async groupByUser(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: GroupByUserArgs): Promise<UserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @NestJS.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUser(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: UpdateManyUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @NestJS.Mutation(_returns => User, {
    nullable: true
  })
  async updateOneUser(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: UpdateOneUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @NestJS.Mutation(_returns => User, {
    nullable: false
  })
  async upsertOneUser(@NestJS.Context() ctx: any, @NestJS.Info() info: GraphQLResolveInfo, @NestJS.Args() args: UpsertOneUserArgs): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
