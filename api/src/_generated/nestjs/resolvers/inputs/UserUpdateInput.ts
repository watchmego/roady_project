import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableEnumUserRoleFieldUpdateOperationsInput } from "../inputs/NullableEnumUserRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrganisationUpdateOneWithoutUsersNestedInput } from "../inputs/OrganisationUpdateOneWithoutUsersNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@NestJS.InputType("UserUpdateInput", {
  isAbstract: true
})
export class UserUpdateInput {
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

  @NestJS.Field(_type => OrganisationUpdateOneWithoutUsersNestedInput, {
    nullable: true
  })
  organisation?: OrganisationUpdateOneWithoutUsersNestedInput | undefined;
}
