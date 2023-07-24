import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@NestJS.InputType("NestedIntFilter", {
  isAbstract: true
})
export class NestedIntFilter {
  @NestJS.Field(_type => NestJS.Int, {
    nullable: true
  })
  equals?: number | undefined;

  @NestJS.Field(_type => [NestJS.Int], {
    nullable: true
  })
  in?: number[] | undefined;

  @NestJS.Field(_type => [NestJS.Int], {
    nullable: true
  })
  notIn?: number[] | undefined;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: true
  })
  lt?: number | undefined;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: true
  })
  lte?: number | undefined;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: true
  })
  gt?: number | undefined;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: true
  })
  gte?: number | undefined;

  @NestJS.Field(_type => NestedIntFilter, {
    nullable: true
  })
  not?: NestedIntFilter | undefined;
}
