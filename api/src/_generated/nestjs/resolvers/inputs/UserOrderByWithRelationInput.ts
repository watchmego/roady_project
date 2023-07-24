import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganisationOrderByWithRelationInput } from "../inputs/OrganisationOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@NestJS.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @NestJS.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @NestJS.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @NestJS.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJS.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @NestJS.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @NestJS.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @NestJS.Field(_type => OrganisationOrderByWithRelationInput, {
    nullable: true
  })
  organisation?: OrganisationOrderByWithRelationInput | undefined;

  @NestJS.Field(_type => SortOrder, {
    nullable: true
  })
  organisationId?: "asc" | "desc" | undefined;
}
