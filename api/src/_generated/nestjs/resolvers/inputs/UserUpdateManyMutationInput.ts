import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableEnumUserRoleFieldUpdateOperationsInput } from "../inputs/NullableEnumUserRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@NestJS.InputType("UserUpdateManyMutationInput", {
  isAbstract: true
})
export class UserUpdateManyMutationInput {
  @NestJS.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @NestJS.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJS.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJS.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @NestJS.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJS.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  imageSmall?: StringFieldUpdateOperationsInput | undefined;

  @NestJS.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  imageLarge?: StringFieldUpdateOperationsInput | undefined;

  @NestJS.Field(_type => NullableEnumUserRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: NullableEnumUserRoleFieldUpdateOperationsInput | undefined;
}
