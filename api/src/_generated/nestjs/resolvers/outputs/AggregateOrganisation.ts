import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganisationCountAggregate } from "../outputs/OrganisationCountAggregate";
import { OrganisationMaxAggregate } from "../outputs/OrganisationMaxAggregate";
import { OrganisationMinAggregate } from "../outputs/OrganisationMinAggregate";

@NestJS.ObjectType("AggregateOrganisation", {
  isAbstract: true
})
export class AggregateOrganisation {
  @NestJS.Field(_type => OrganisationCountAggregate, {
    nullable: true
  })
  _count!: OrganisationCountAggregate | null;

  @NestJS.Field(_type => OrganisationMinAggregate, {
    nullable: true
  })
  _min!: OrganisationMinAggregate | null;

  @NestJS.Field(_type => OrganisationMaxAggregate, {
    nullable: true
  })
  _max!: OrganisationMaxAggregate | null;
}
