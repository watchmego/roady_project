import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedStringFilter } from "../inputs/NestedStringFilter";

@NestJS.InputType("NestedUuidWithAggregatesFilter", {
  isAbstract: true
})
export class NestedUuidWithAggregatesFilter {
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

  @NestJS.Field(_type => NestedUuidWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedUuidWithAggregatesFilter | undefined;

  @NestJS.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @NestJS.Field(_type => NestedStringFilter, {
    nullable: true
  })
  _min?: NestedStringFilter | undefined;

  @NestJS.Field(_type => NestedStringFilter, {
    nullable: true
  })
  _max?: NestedStringFilter | undefined;
}
