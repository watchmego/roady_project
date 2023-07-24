import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@NestJS.InputType("OrganisationMinOrderByAggregateInput", {
  isAbstract: true
})
export class OrganisationMinOrderByAggregateInput {
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
}
