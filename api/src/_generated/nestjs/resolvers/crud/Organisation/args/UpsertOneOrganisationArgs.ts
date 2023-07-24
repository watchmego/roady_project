import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganisationCreateInput } from "../../../inputs/OrganisationCreateInput";
import { OrganisationUpdateInput } from "../../../inputs/OrganisationUpdateInput";
import { OrganisationWhereUniqueInput } from "../../../inputs/OrganisationWhereUniqueInput";

@NestJS.ArgsType()
export class UpsertOneOrganisationArgs {
  @NestJS.Field(_type => OrganisationWhereUniqueInput, {
    nullable: false
  })
  where!: OrganisationWhereUniqueInput;

  @NestJS.Field(_type => OrganisationCreateInput, {
    nullable: false
  })
  create!: OrganisationCreateInput;

  @NestJS.Field(_type => OrganisationUpdateInput, {
    nullable: false
  })
  update!: OrganisationUpdateInput;
}
