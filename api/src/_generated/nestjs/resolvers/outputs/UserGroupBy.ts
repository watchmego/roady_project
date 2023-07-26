import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserRole } from "../../enums/UserRole";

@NestJS.ObjectType("UserGroupBy", {
  isAbstract: true
})
export class UserGroupBy {
  @NestJS.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @NestJS.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @NestJS.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @NestJS.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @NestJS.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @NestJS.Field(_type => String, {
    nullable: false
  })
  imageSmall!: string;

  @NestJS.Field(_type => String, {
    nullable: false
  })
  imageLarge!: string;

  @NestJS.Field(_type => UserRole, {
    nullable: true
  })
  role!: "admin" | "supplier" | "contributor" | "user" | null;

  @NestJS.Field(_type => String, {
    nullable: true
  })
  organisationId!: string | null;

  @NestJS.Field(_type => UserCountAggregate, {
    nullable: true
  })
  _count!: UserCountAggregate | null;

  @NestJS.Field(_type => UserMinAggregate, {
    nullable: true
  })
  _min!: UserMinAggregate | null;

  @NestJS.Field(_type => UserMaxAggregate, {
    nullable: true
  })
  _max!: UserMaxAggregate | null;
}
