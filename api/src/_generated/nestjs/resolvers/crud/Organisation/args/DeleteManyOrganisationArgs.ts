import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganisationWhereInput } from "../../../inputs/OrganisationWhereInput";

@NestJS.ArgsType()
export class DeleteManyOrganisationArgs {
  @NestJS.Field(_type => OrganisationWhereInput, {
    nullable: true
  })
  where?: OrganisationWhereInput | undefined;
}
