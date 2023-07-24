import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganisationCountOrderByAggregateInput } from "../inputs/OrganisationCountOrderByAggregateInput";
import { OrganisationMaxOrderByAggregateInput } from "../inputs/OrganisationMaxOrderByAggregateInput";
import { OrganisationMinOrderByAggregateInput } from "../inputs/OrganisationMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@NestJS.InputType("OrganisationOrderByWithAggregationInput", {
  isAbstract: true
})
export class OrganisationOrderByWithAggregationInput {
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

  @NestJS.Field(_type => OrganisationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OrganisationCountOrderByAggregateInput | undefined;

  @NestJS.Field(_type => OrganisationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OrganisationMaxOrderByAggregateInput | undefined;

  @NestJS.Field(_type => OrganisationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OrganisationMinOrderByAggregateInput | undefined;
}
