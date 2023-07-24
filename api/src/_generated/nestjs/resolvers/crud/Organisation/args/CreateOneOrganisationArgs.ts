import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganisationCreateInput } from "../../../inputs/OrganisationCreateInput";

@NestJS.ArgsType()
export class CreateOneOrganisationArgs {
  @NestJS.Field(_type => OrganisationCreateInput, {
    nullable: false
  })
  data!: OrganisationCreateInput;
}
