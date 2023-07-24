import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@NestJS.InputType("UserWhereUniqueInput", {
  isAbstract: true
})
export class UserWhereUniqueInput {
  @NestJS.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;
}
