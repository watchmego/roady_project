import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@NestJS.InputType("StringFieldUpdateOperationsInput", {
  isAbstract: true
})
export class StringFieldUpdateOperationsInput {
  @NestJS.Field(_type => String, {
    nullable: true
  })
  set?: string | undefined;
}
