import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@NestJS.InputType("NullableStringFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableStringFieldUpdateOperationsInput {
  @NestJS.Field(_type => String, {
    nullable: true
  })
  set?: string | undefined;
}
