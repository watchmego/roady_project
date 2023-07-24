import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@NestJS.ObjectType("OrganisationCount", {
  isAbstract: true
})
export class OrganisationCount {
  @NestJS.Field(_type => NestJS.Int, {
    nullable: false
  })
  users!: number;
}
