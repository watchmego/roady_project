import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedUuidNullableFilter } from "../inputs/NestedUuidNullableFilter";
import { QueryMode } from "../../enums/QueryMode";

@NestJS.InputType("UuidNullableFilter", {
  isAbstract: true
})
export class UuidNullableFilter {
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

  @NestJS.Field(_type => QueryMode, {
    nullable: true
  })
  mode?: "default" | "insensitive" | undefined;

  @NestJS.Field(_type => NestedUuidNullableFilter, {
    nullable: true
  })
  not?: NestedUuidNullableFilter | undefined;
}
