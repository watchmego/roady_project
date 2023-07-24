import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganisationCreateOrConnectWithoutUsersInput } from "../inputs/OrganisationCreateOrConnectWithoutUsersInput";
import { OrganisationCreateWithoutUsersInput } from "../inputs/OrganisationCreateWithoutUsersInput";
import { OrganisationWhereUniqueInput } from "../inputs/OrganisationWhereUniqueInput";

@NestJS.InputType("OrganisationCreateNestedOneWithoutUsersInput", {
  isAbstract: true
})
export class OrganisationCreateNestedOneWithoutUsersInput {
  @NestJS.Field(_type => OrganisationCreateWithoutUsersInput, {
    nullable: true
  })
  create?: OrganisationCreateWithoutUsersInput | undefined;

  @NestJS.Field(_type => OrganisationCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: OrganisationCreateOrConnectWithoutUsersInput | undefined;

  @NestJS.Field(_type => OrganisationWhereUniqueInput, {
    nullable: true
  })
  connect?: OrganisationWhereUniqueInput | undefined;
}
