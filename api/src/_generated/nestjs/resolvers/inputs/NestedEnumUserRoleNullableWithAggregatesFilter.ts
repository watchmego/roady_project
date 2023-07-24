import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumUserRoleNullableFilter } from "../inputs/NestedEnumUserRoleNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { UserRole } from "../../enums/UserRole";

@NestJS.InputType("NestedEnumUserRoleNullableWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumUserRoleNullableWithAggregatesFilter {
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

  @NestJS.Field(_type => NestedEnumUserRoleNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumUserRoleNullableWithAggregatesFilter | undefined;

  @NestJS.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @NestJS.Field(_type => NestedEnumUserRoleNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumUserRoleNullableFilter | undefined;

  @NestJS.Field(_type => NestedEnumUserRoleNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumUserRoleNullableFilter | undefined;
}
