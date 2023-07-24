import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrganisationOrderByWithRelationInput } from "../../../inputs/OrganisationOrderByWithRelationInput";
import { OrganisationWhereInput } from "../../../inputs/OrganisationWhereInput";
import { OrganisationWhereUniqueInput } from "../../../inputs/OrganisationWhereUniqueInput";
import { OrganisationScalarFieldEnum } from "../../../../enums/OrganisationScalarFieldEnum";

@NestJS.ArgsType()
export class FindFirstOrganisationArgs {
  @NestJS.Field(_type => OrganisationWhereInput, {
    nullable: true
  })
  where?: OrganisationWhereInput | undefined;

  @NestJS.Field(_type => [OrganisationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OrganisationOrderByWithRelationInput[] | undefined;

  @NestJS.Field(_type => OrganisationWhereUniqueInput, {
    nullable: true
  })
  cursor?: OrganisationWhereUniqueInput | undefined;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: true
  })
  take?: number | undefined;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @NestJS.Field(_type => [OrganisationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "name"> | undefined;
}
