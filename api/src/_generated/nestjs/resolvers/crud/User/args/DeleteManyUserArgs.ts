import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserWhereInput } from "../../../inputs/UserWhereInput";

@NestJS.ArgsType()
export class DeleteManyUserArgs {
  @NestJS.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
