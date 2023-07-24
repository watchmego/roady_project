import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@NestJS.ObjectType("UserCountAggregate", {
  isAbstract: true
})
export class UserCountAggregate {
  @NestJS.Field(_type => NestJS.Int, {
    nullable: false
  })
  id!: number;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: false
  })
  createdAt!: number;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: false
  })
  updatedAt!: number;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: false
  })
  email!: number;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: false
  })
  name!: number;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: false
  })
  role!: number;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: false
  })
  organisationId!: number;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: false
  })
  _all!: number;
}
