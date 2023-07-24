import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyOrganisationInputEnvelope } from "../inputs/UserCreateManyOrganisationInputEnvelope";
import { UserCreateOrConnectWithoutOrganisationInput } from "../inputs/UserCreateOrConnectWithoutOrganisationInput";
import { UserCreateWithoutOrganisationInput } from "../inputs/UserCreateWithoutOrganisationInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutOrganisationInput } from "../inputs/UserUpdateManyWithWhereWithoutOrganisationInput";
import { UserUpdateWithWhereUniqueWithoutOrganisationInput } from "../inputs/UserUpdateWithWhereUniqueWithoutOrganisationInput";
import { UserUpsertWithWhereUniqueWithoutOrganisationInput } from "../inputs/UserUpsertWithWhereUniqueWithoutOrganisationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@NestJS.InputType("UserUpdateManyWithoutOrganisationNestedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutOrganisationNestedInput {
  @NestJS.Field(_type => [UserCreateWithoutOrganisationInput], {
    nullable: true
  })
  create?: UserCreateWithoutOrganisationInput[] | undefined;

  @NestJS.Field(_type => [UserCreateOrConnectWithoutOrganisationInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOrganisationInput[] | undefined;

  @NestJS.Field(_type => [UserUpsertWithWhereUniqueWithoutOrganisationInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutOrganisationInput[] | undefined;

  @NestJS.Field(_type => UserCreateManyOrganisationInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyOrganisationInputEnvelope | undefined;

  @NestJS.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @NestJS.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @NestJS.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @NestJS.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @NestJS.Field(_type => [UserUpdateWithWhereUniqueWithoutOrganisationInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutOrganisationInput[] | undefined;

  @NestJS.Field(_type => [UserUpdateManyWithWhereWithoutOrganisationInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutOrganisationInput[] | undefined;

  @NestJS.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
