import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganisationUpdateInput } from "../../../inputs/OrganisationUpdateInput";
import { OrganisationWhereUniqueInput } from "../../../inputs/OrganisationWhereUniqueInput";

@NestJS.ArgsType()
export class UpdateOneOrganisationArgs {
  @NestJS.Field(_type => OrganisationUpdateInput, {
    nullable: false
  })
  data!: OrganisationUpdateInput;

  @NestJS.Field(_type => OrganisationWhereUniqueInput, {
    nullable: false
  })
  where!: OrganisationWhereUniqueInput;
}
