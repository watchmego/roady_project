import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserRole } from "../../enums/UserRole";

@NestJS.InputType("NestedEnumUserRoleNullableFilter", {
  isAbstract: true
})
export class NestedEnumUserRoleNullableFilter {
  @NestJS.Field(_type => UserRole, {
    nullable: true
  })
  equals?: "admin" | "supplier" | "contributor" | "user" | undefined;

  @NestJS.Field(_type => [UserRole], {
    nullable: true
  })
  in?: Array<"admin" | "supplier" | "contributor" | "user"> | undefined;

  @NestJS.Field(_type => [UserRole], {
    nullable: true
  })
  notIn?: Array<"admin" | "supplier" | "contributor" | "user"> | undefined;

  @NestJS.Field(_type => NestedEnumUserRoleNullableFilter, {
    nullable: true
  })
  not?: NestedEnumUserRoleNullableFilter | undefined;
}
