import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserUpdateManyMutationInput } from "../../../inputs/UserUpdateManyMutationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";

@NestJS.ArgsType()
export class UpdateManyUserArgs {
  @NestJS.Field(_type => UserUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserUpdateManyMutationInput;

  @NestJS.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
