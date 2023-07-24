import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganisationCreateManyInput } from "../../../inputs/OrganisationCreateManyInput";

@NestJS.ArgsType()
export class CreateManyOrganisationArgs {
  @NestJS.Field(_type => [OrganisationCreateManyInput], {
    nullable: false
  })
  data!: OrganisationCreateManyInput[];

  @NestJS.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
