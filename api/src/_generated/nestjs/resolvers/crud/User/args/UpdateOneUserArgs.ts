import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserUpdateInput } from "../../../inputs/UserUpdateInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";

@NestJS.ArgsType()
export class UpdateOneUserArgs {
  @NestJS.Field(_type => UserUpdateInput, {
    nullable: false
  })
  data!: UserUpdateInput;

  @NestJS.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;
}
