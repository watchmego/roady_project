import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOrderByWithAggregationInput } from "../../../inputs/UserOrderByWithAggregationInput";
import { UserScalarWhereWithAggregatesInput } from "../../../inputs/UserScalarWhereWithAggregatesInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserScalarFieldEnum } from "../../../../enums/UserScalarFieldEnum";

@NestJS.ArgsType()
export class GroupByUserArgs {
  @NestJS.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @NestJS.Field(_type => [UserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserOrderByWithAggregationInput[] | undefined;

  @NestJS.Field(_type => [UserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "email" | "name" | "imageSmall" | "imageLarge" | "role" | "organisationId">;

  @NestJS.Field(_type => UserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserScalarWhereWithAggregatesInput | undefined;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: true
  })
  take?: number | undefined;

  @NestJS.Field(_type => NestJS.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
