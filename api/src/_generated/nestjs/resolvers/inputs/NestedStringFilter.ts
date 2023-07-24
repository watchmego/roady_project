import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@NestJS.InputType("NestedStringFilter", {
  isAbstract: true
})
export class NestedStringFilter {
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

  @NestJS.Field(_type => NestedStringFilter, {
    nullable: true
  })
  not?: NestedStringFilter | undefined;
}
