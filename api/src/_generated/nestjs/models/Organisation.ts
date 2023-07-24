import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { OrganisationCount } from "../resolvers/outputs/OrganisationCount";

@NestJS.ObjectType("Organisation", {
  isAbstract: true
})
export class Organisation {
  @NestJS.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @NestJS.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @NestJS.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @NestJS.Field(_type => String, {
    nullable: false
  })
  name!: string;

  users?: User[];

  @NestJS.Field(_type => OrganisationCount, {
    nullable: true
  })
  _count?: OrganisationCount | null;
}
