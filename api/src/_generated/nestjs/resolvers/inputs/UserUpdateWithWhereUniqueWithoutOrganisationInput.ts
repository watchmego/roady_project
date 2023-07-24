import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutOrganisationInput } from "../inputs/UserUpdateWithoutOrganisationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@NestJS.InputType("UserUpdateWithWhereUniqueWithoutOrganisationInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutOrganisationInput {
  @NestJS.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @NestJS.Field(_type => UserUpdateWithoutOrganisationInput, {
    nullable: false
  })
  data!: UserUpdateWithoutOrganisationInput;
}
