import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyOrganisationInputEnvelope } from "../inputs/UserCreateManyOrganisationInputEnvelope";
import { UserCreateOrConnectWithoutOrganisationInput } from "../inputs/UserCreateOrConnectWithoutOrganisationInput";
import { UserCreateWithoutOrganisationInput } from "../inputs/UserCreateWithoutOrganisationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@NestJS.InputType("UserCreateNestedManyWithoutOrganisationInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutOrganisationInput {
  @NestJS.Field(_type => [UserCreateWithoutOrganisationInput], {
    nullable: true
  })
  create?: UserCreateWithoutOrganisationInput[] | undefined;

  @NestJS.Field(_type => [UserCreateOrConnectWithoutOrganisationInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOrganisationInput[] | undefined;

  @NestJS.Field(_type => UserCreateManyOrganisationInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyOrganisationInputEnvelope | undefined;

  @NestJS.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
