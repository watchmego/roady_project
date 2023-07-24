import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@NestJS.ObjectType("OrganisationMinAggregate", {
  isAbstract: true
})
export class OrganisationMinAggregate {
  @NestJS.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @NestJS.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @NestJS.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @NestJS.Field(_type => String, {
    nullable: true
  })
  name!: string | null;
}
