import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutOrganisationInput } from "../inputs/UserCreateWithoutOrganisationInput";
import { UserUpdateWithoutOrganisationInput } from "../inputs/UserUpdateWithoutOrganisationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@NestJS.InputType("UserUpsertWithWhereUniqueWithoutOrganisationInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutOrganisationInput {
  @NestJS.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @NestJS.Field(_type => UserUpdateWithoutOrganisationInput, {
    nullable: false
  })
  update!: UserUpdateWithoutOrganisationInput;

  @NestJS.Field(_type => UserCreateWithoutOrganisationInput, {
    nullable: false
  })
  create!: UserCreateWithoutOrganisationInput;
}
