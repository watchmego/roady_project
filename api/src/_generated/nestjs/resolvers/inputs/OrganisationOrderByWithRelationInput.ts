import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@NestJS.InputType("OrganisationOrderByWithRelationInput", {
  isAbstract: true
})
export class OrganisationOrderByWithRelationInput {
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
  name?: "asc" | "desc" | undefined;

  @NestJS.Field(_type => UserOrderByRelationAggregateInput, {
    nullable: true
  })
  users?: UserOrderByRelationAggregateInput | undefined;
}
