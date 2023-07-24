import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganisationWhereUniqueInput } from "../../../inputs/OrganisationWhereUniqueInput";

@NestJS.ArgsType()
export class FindUniqueOrganisationOrThrowArgs {
  @NestJS.Field(_type => OrganisationWhereUniqueInput, {
    nullable: false
  })
  where!: OrganisationWhereUniqueInput;
}
