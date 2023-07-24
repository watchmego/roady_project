import * as NestJS from "@nestjs/graphql";

export enum SortOrder {
  asc = "asc",
  desc = "desc"
}
NestJS.registerEnumType(SortOrder, {
  name: "SortOrder",
  description: undefined,
});
