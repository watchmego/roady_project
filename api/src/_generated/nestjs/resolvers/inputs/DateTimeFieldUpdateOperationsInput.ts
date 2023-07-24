import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@NestJS.InputType("DateTimeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class DateTimeFieldUpdateOperationsInput {
  @NestJS.Field(_type => Date, {
    nullable: true
  })
  set?: Date | undefined;
}
