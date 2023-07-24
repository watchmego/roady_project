import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganisationCreateWithoutUsersInput } from "../inputs/OrganisationCreateWithoutUsersInput";
import { OrganisationWhereUniqueInput } from "../inputs/OrganisationWhereUniqueInput";

@NestJS.InputType("OrganisationCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class OrganisationCreateOrConnectWithoutUsersInput {
  @NestJS.Field(_type => OrganisationWhereUniqueInput, {
    nullable: false
  })
  where!: OrganisationWhereUniqueInput;

  @NestJS.Field(_type => OrganisationCreateWithoutUsersInput, {
    nullable: false
  })
  create!: OrganisationCreateWithoutUsersInput;
}
