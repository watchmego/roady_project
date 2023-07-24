import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutOrganisationInput } from "../inputs/UserCreateWithoutOrganisationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@NestJS.InputType("UserCreateOrConnectWithoutOrganisationInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutOrganisationInput {
  @NestJS.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @NestJS.Field(_type => UserCreateWithoutOrganisationInput, {
    nullable: false
  })
  create!: UserCreateWithoutOrganisationInput;
}
