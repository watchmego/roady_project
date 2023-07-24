import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOrderByWithRelationInput } from "../../../inputs/UserOrderByWithRelationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
import { UserScalarFieldEnum } from "../../../../enums/UserScalarFieldEnum";

@NestJS.ArgsType()
export class FindFirstUserArgs {
  @NestJS.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @NestJS.Field(_type => [UserOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserOrderByWithRelationInput[] | undefined;

  @NestJS.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserWhereUniqueInput | undefined;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: true
  })
  take?: number | undefined;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @NestJS.Field(_type => [UserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "email" | "name" | "role" | "organisationId"> | undefined;
}
