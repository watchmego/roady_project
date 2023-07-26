import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganisationCreateNestedOneWithoutUsersInput } from "../inputs/OrganisationCreateNestedOneWithoutUsersInput";
import { UserRole } from "../../enums/UserRole";

@NestJS.InputType("UserCreateInput", {
  isAbstract: true
})
export class UserCreateInput {
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
  role?: "admin" | "supplier" | "contributor" | "user" | undefined;

  @NestJS.Field(_type => OrganisationCreateNestedOneWithoutUsersInput, {
    nullable: true
  })
  organisation?: OrganisationCreateNestedOneWithoutUsersInput | undefined;
}
