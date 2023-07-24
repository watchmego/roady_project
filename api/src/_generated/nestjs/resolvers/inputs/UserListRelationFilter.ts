import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserWhereInput } from "../inputs/UserWhereInput";

@NestJS.InputType("UserListRelationFilter", {
  isAbstract: true
})
export class UserListRelationFilter {
  @NestJS.Field(_type => UserWhereInput, {
    nullable: true
  })
  every?: UserWhereInput | undefined;

  @NestJS.Field(_type => UserWhereInput, {
    nullable: true
  })
  some?: UserWhereInput | undefined;

  @NestJS.Field(_type => UserWhereInput, {
    nullable: true
  })
  none?: UserWhereInput | undefined;
}
