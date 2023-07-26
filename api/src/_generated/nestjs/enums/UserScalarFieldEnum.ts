import * as NestJS from "@nestjs/graphql";

export enum UserScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  email = "email",
  name = "name",
  imageSmall = "imageSmall",
  imageLarge = "imageLarge",
  role = "role",
  organisationId = "organisationId"
}
NestJS.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
