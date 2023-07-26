import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumUserRoleNullableFilter } from "../inputs/EnumUserRoleNullableFilter";
import { OrganisationRelationFilter } from "../inputs/OrganisationRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@NestJS.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @NestJS.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @NestJS.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @NestJS.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @NestJS.Field(_type => UuidFilter, {
    nullable: true
  })
  id?: UuidFilter | undefined;

  @NestJS.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @NestJS.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @NestJS.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @NestJS.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @NestJS.Field(_type => StringFilter, {
    nullable: true
  })
  imageSmall?: StringFilter | undefined;

  @NestJS.Field(_type => StringFilter, {
    nullable: true
  })
  imageLarge?: StringFilter | undefined;

  @NestJS.Field(_type => EnumUserRoleNullableFilter, {
    nullable: true
  })
  role?: EnumUserRoleNullableFilter | undefined;

  @NestJS.Field(_type => OrganisationRelationFilter, {
    nullable: true
  })
  organisation?: OrganisationRelationFilter | undefined;

  @NestJS.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  organisationId?: UuidNullableFilter | undefined;
}
