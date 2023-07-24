import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";

@NestJS.ArgsType()
export class FindUniqueUserOrThrowArgs {
  @NestJS.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;
}
