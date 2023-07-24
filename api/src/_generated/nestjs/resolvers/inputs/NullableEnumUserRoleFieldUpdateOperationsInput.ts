import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserRole } from "../../enums/UserRole";

@NestJS.InputType("NullableEnumUserRoleFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableEnumUserRoleFieldUpdateOperationsInput {
  @NestJS.Field(_type => UserRole, {
    nullable: true
  })
  set?: "admin" | "supplier" | "contributor" | "user" | undefined;
}
