import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyOrganisationInput } from "../inputs/UserCreateManyOrganisationInput";

@NestJS.InputType("UserCreateManyOrganisationInputEnvelope", {
  isAbstract: true
})
export class UserCreateManyOrganisationInputEnvelope {
  @NestJS.Field(_type => [UserCreateManyOrganisationInput], {
    nullable: false
  })
  data!: UserCreateManyOrganisationInput[];

  @NestJS.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
