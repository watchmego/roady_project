import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@NestJS.InputType("OrganisationCreateWithoutUsersInput", {
  isAbstract: true
})
export class OrganisationCreateWithoutUsersInput {
  @NestJS.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @NestJS.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @NestJS.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @NestJS.Field(_type => String, {
    nullable: false
  })
  name!: string;
}
