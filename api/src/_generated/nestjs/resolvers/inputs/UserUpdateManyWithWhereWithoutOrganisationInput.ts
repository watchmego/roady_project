import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyMutationInput } from "../inputs/UserUpdateManyMutationInput";

@NestJS.InputType("UserUpdateManyWithWhereWithoutOrganisationInput", {
  isAbstract: true
})
export class UserUpdateManyWithWhereWithoutOrganisationInput {
  @NestJS.Field(_type => UserScalarWhereInput, {
    nullable: false
  })
  where!: UserScalarWhereInput;

  @NestJS.Field(_type => UserUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserUpdateManyMutationInput;
}
