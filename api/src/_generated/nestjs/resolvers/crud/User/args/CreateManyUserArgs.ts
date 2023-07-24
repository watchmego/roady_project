import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserCreateManyInput } from "../../../inputs/UserCreateManyInput";

@NestJS.ArgsType()
export class CreateManyUserArgs {
  @NestJS.Field(_type => [UserCreateManyInput], {
    nullable: false
  })
  data!: UserCreateManyInput[];

  @NestJS.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
