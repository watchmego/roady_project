import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@NestJS.InputType("UserOrderByRelationAggregateInput", {
  isAbstract: true
})
export class UserOrderByRelationAggregateInput {
  @NestJS.Field(_type => SortOrder, {
    nullable: true
  })
  _count?: "asc" | "desc" | undefined;
}
