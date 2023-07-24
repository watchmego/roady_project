import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutOrganisationInput } from "../inputs/UserCreateNestedManyWithoutOrganisationInput";

@NestJS.InputType("OrganisationCreateInput", {
  isAbstract: true
})
export class OrganisationCreateInput {
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
  name!: string;

  @NestJS.Field(_type => UserCreateNestedManyWithoutOrganisationInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutOrganisationInput | undefined;
}
