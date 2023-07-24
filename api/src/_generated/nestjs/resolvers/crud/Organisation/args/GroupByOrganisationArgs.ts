import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganisationOrderByWithAggregationInput } from "../../../inputs/OrganisationOrderByWithAggregationInput";
import { OrganisationScalarWhereWithAggregatesInput } from "../../../inputs/OrganisationScalarWhereWithAggregatesInput";
import { OrganisationWhereInput } from "../../../inputs/OrganisationWhereInput";
import { OrganisationScalarFieldEnum } from "../../../../enums/OrganisationScalarFieldEnum";

@NestJS.ArgsType()
export class GroupByOrganisationArgs {
  @NestJS.Field(_type => OrganisationWhereInput, {
    nullable: true
  })
  where?: OrganisationWhereInput | undefined;

  @NestJS.Field(_type => [OrganisationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OrganisationOrderByWithAggregationInput[] | undefined;

  @NestJS.Field(_type => [OrganisationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "name">;

  @NestJS.Field(_type => OrganisationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OrganisationScalarWhereWithAggregatesInput | undefined;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: true
  })
  take?: number | undefined;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
