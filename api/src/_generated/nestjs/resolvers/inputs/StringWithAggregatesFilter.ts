import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedStringFilter } from "../inputs/NestedStringFilter";
import { NestedStringWithAggregatesFilter } from "../inputs/NestedStringWithAggregatesFilter";
import { QueryMode } from "../../enums/QueryMode";

@NestJS.InputType("StringWithAggregatesFilter", {
  isAbstract: true
})
export class StringWithAggregatesFilter {
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

  @NestJS.Field(_type => String, {
    nullable: true
  })
  contains?: string | undefined;

  @NestJS.Field(_type => String, {
    nullable: true
  })
  startsWith?: string | undefined;

  @NestJS.Field(_type => String, {
    nullable: true
  })
  endsWith?: string | undefined;

  @NestJS.Field(_type => QueryMode, {
    nullable: true
  })
  mode?: "default" | "insensitive" | undefined;

  @NestJS.Field(_type => NestedStringWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedStringWithAggregatesFilter | undefined;

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
