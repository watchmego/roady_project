import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { NestedStringNullableFilter } from "../inputs/NestedStringNullableFilter";

@NestJS.InputType("NestedUuidNullableWithAggregatesFilter", {
  isAbstract: true
})
export class NestedUuidNullableWithAggregatesFilter {
  @NestJS.Field(_type => String, {
    nullable: true
  })
  equals?: string | undefined;

  @NestJS.Field(_type => [String], {
    nullable: true
  })
  in?: string[] | undefined;

  @NestJS.Field(_type => [String], {
    nullable: true
  })
  notIn?: string[] | undefined;

  @NestJS.Field(_type => String, {
    nullable: true
  })
  lt?: string | undefined;

  @NestJS.Field(_type => String, {
    nullable: true
  })
  lte?: string | undefined;

  @NestJS.Field(_type => String, {
    nullable: true
  })
  gt?: string | undefined;

  @NestJS.Field(_type => String, {
    nullable: true
  })
  gte?: string | undefined;

  @NestJS.Field(_type => NestedUuidNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedUuidNullableWithAggregatesFilter | undefined;

  @NestJS.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @NestJS.Field(_type => NestedStringNullableFilter, {
    nullable: true
  })
  _min?: NestedStringNullableFilter | undefined;

  @NestJS.Field(_type => NestedStringNullableFilter, {
    nullable: true
  })
  _max?: NestedStringNullableFilter | undefined;
}
