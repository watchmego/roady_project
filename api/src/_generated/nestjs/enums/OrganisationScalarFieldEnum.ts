import * as NestJS from "@nestjs/graphql";

export enum OrganisationScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name"
}
NestJS.registerEnumType(OrganisationScalarFieldEnum, {
  name: "OrganisationScalarFieldEnum",
  description: undefined,
});
