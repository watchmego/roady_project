import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
import { UuidWithAggregatesFilter } from "../inputs/UuidWithAggregatesFilter";

@NestJS.InputType("OrganisationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class OrganisationScalarWhereWithAggregatesInput {
  @NestJS.Field(_type => [OrganisationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OrganisationScalarWhereWithAggregatesInput[] | undefined;

  @NestJS.Field(_type => [OrganisationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OrganisationScalarWhereWithAggregatesInput[] | undefined;

  @NestJS.Field(_type => [OrganisationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OrganisationScalarWhereWithAggregatesInput[] | undefined;

  @NestJS.Field(_type => UuidWithAggregatesFilter, {
    nullable: true
  })
  id?: UuidWithAggregatesFilter | undefined;

  @NestJS.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJS.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJS.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
