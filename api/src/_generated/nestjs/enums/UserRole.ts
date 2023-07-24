import * as NestJS from "@nestjs/graphql";

export enum UserRole {
  admin = "admin",
  supplier = "supplier",
  contributor = "contributor",
  user = "user"
}
NestJS.registerEnumType(UserRole, {
  name: "UserRole",
  description: undefined,
});
