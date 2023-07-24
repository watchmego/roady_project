import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumUserRoleNullableFilter } from "../inputs/EnumUserRoleNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UuidFilter } from "../inputs/UuidFilter";
import { UuidNullableFilter } from "../inputs/UuidNullableFilter";

@NestJS.InputType("UserScalarWhereInput", {
  isAbstract: true
})
export class UserScalarWhereInput {
  @NestJS.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  AND?: UserScalarWhereInput[] | undefined;

  @NestJS.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  OR?: UserScalarWhereInput[] | undefined;

  @NestJS.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  NOT?: UserScalarWhereInput[] | undefined;

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

  @NestJS.Field(_type => EnumUserRoleNullableFilter, {
    nullable: true
  })
  role?: EnumUserRoleNullableFilter | undefined;

  @NestJS.Field(_type => UuidNullableFilter, {
    nullable: true
  })
  organisationId?: UuidNullableFilter | undefined;
}
