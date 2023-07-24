import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@NestJS.ObjectType("AffectedRowsOutput", {
  isAbstract: true
})
export class AffectedRowsOutput {
  @NestJS.Field(_type => NestJS.Int, {
    nullable: false
  })
  count!: number;
}
