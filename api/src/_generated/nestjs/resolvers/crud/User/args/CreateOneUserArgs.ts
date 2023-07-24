import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserCreateInput } from "../../../inputs/UserCreateInput";

@NestJS.ArgsType()
export class CreateOneUserArgs {
  @NestJS.Field(_type => UserCreateInput, {
    nullable: false
  })
  data!: UserCreateInput;
}
