import * as NestJS from "@nestjs/graphql";

export enum QueryMode {
  "default" = "default",
  insensitive = "insensitive"
}
NestJS.registerEnumType(QueryMode, {
  name: "QueryMode",
  description: undefined,
});
