import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Organisation } from "../models/Organisation";
import { UserRole } from "../enums/UserRole";

@NestJS.ObjectType("User", {
  isAbstract: true
})
export class User {
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
  name?: string | null;

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
  role?: "admin" | "supplier" | "contributor" | "user" | null;

  organisation?: Organisation | null;

  @NestJS.Field(_type => String, {
    nullable: true
  })
  organisationId?: string | null;
}
