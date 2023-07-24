import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserRole } from "../../enums/UserRole";

@NestJS.InputType("UserCreateWithoutOrganisationInput", {
  isAbstract: true
})
export class UserCreateWithoutOrganisationInput {
  @NestJS.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @NestJS.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @NestJS.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @NestJS.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @NestJS.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @NestJS.Field(_type => UserRole, {
    nullable: true
  })
  role?: "admin" | "supplier" | "contributor" | "user" | undefined;
}
