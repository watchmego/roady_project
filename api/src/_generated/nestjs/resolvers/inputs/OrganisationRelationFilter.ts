import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganisationWhereInput } from "../inputs/OrganisationWhereInput";

@NestJS.InputType("OrganisationRelationFilter", {
  isAbstract: true
})
export class OrganisationRelationFilter {
  @NestJS.Field(_type => OrganisationWhereInput, {
    nullable: true
  })
  is?: OrganisationWhereInput | undefined;

  @NestJS.Field(_type => OrganisationWhereInput, {
    nullable: true
  })
  isNot?: OrganisationWhereInput | undefined;
}
