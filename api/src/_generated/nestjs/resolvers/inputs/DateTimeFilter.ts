import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedDateTimeFilter } from "../inputs/NestedDateTimeFilter";

@NestJS.InputType("DateTimeFilter", {
  isAbstract: true
})
export class DateTimeFilter {
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

  @NestJS.Field(_type => NestedDateTimeFilter, {
    nullable: true
  })
  not?: NestedDateTimeFilter | undefined;
}
