import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
import { UuidFilter } from "../inputs/UuidFilter";

@NestJS.InputType("OrganisationWhereInput", {
  isAbstract: true
})
export class OrganisationWhereInput {
  @NestJS.Field(_type => [OrganisationWhereInput], {
    nullable: true
  })
  AND?: OrganisationWhereInput[] | undefined;

  @NestJS.Field(_type => [OrganisationWhereInput], {
    nullable: true
  })
  OR?: OrganisationWhereInput[] | undefined;

  @NestJS.Field(_type => [OrganisationWhereInput], {
    nullable: true
  })
  NOT?: OrganisationWhereInput[] | undefined;

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
  name?: StringFilter | undefined;

  @NestJS.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  users?: UserListRelationFilter | undefined;
}
