import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganisationUpdateManyMutationInput } from "../../../inputs/OrganisationUpdateManyMutationInput";
import { OrganisationWhereInput } from "../../../inputs/OrganisationWhereInput";

@NestJS.ArgsType()
export class UpdateManyOrganisationArgs {
  @NestJS.Field(_type => OrganisationUpdateManyMutationInput, {
    nullable: false
  })
  data!: OrganisationUpdateManyMutationInput;

  @NestJS.Field(_type => OrganisationWhereInput, {
    nullable: true
  })
  where?: OrganisationWhereInput | undefined;
}
