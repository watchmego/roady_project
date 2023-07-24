import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedDateTimeFilter } from "../inputs/NestedDateTimeFilter";
import { NestedDateTimeWithAggregatesFilter } from "../inputs/NestedDateTimeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@NestJS.InputType("DateTimeWithAggregatesFilter", {
  isAbstract: true
})
export class DateTimeWithAggregatesFilter {
  @NestJS.Field(_type => Date, {
    nullable: true
  })
  equals?: Date | undefined;

  @NestJS.Field(_type => [Date], {
    nullable: true
  })
  in?: Date[] | undefined;

  @NestJS.Field(_type => [Date], {
    nullable: true
  })
  notIn?: Date[] | undefined;

  @NestJS.Field(_type => Date, {
    nullable: true
  })
  lt?: Date | undefined;

  @NestJS.Field(_type => Date, {
    nullable: true
  })
  lte?: Date | undefined;

  @NestJS.Field(_type => Date, {
    nullable: true
  })
  gt?: Date | undefined;

  @NestJS.Field(_type => Date, {
    nullable: true
  })
  gte?: Date | undefined;

  @NestJS.Field(_type => NestedDateTimeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedDateTimeWithAggregatesFilter | undefined;

  @NestJS.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @NestJS.Field(_type => NestedDateTimeFilter, {
    nullable: true
  })
  _min?: NestedDateTimeFilter | undefined;

  @NestJS.Field(_type => NestedDateTimeFilter, {
    nullable: true
  })
  _max?: NestedDateTimeFilter | undefined;
}
