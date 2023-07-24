import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserCreateInput } from "../../../inputs/UserCreateInput";
import { UserUpdateInput } from "../../../inputs/UserUpdateInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";

@NestJS.ArgsType()
export class UpsertOneUserArgs {
  @NestJS.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @NestJS.Field(_type => UserCreateInput, {
    nullable: false
  })
  create!: UserCreateInput;

  @NestJS.Field(_type => UserUpdateInput, {
    nullable: false
  })
  update!: UserUpdateInput;
}
