import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganisationCreateWithoutUsersInput } from "../inputs/OrganisationCreateWithoutUsersInput";
import { OrganisationUpdateWithoutUsersInput } from "../inputs/OrganisationUpdateWithoutUsersInput";

@NestJS.InputType("OrganisationUpsertWithoutUsersInput", {
  isAbstract: true
})
export class OrganisationUpsertWithoutUsersInput {
  @NestJS.Field(_type => OrganisationUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: OrganisationUpdateWithoutUsersInput;

  @NestJS.Field(_type => OrganisationCreateWithoutUsersInput, {
    nullable: false
  })
  create!: OrganisationCreateWithoutUsersInput;
}
