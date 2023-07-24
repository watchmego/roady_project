import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrganisationCreateOrConnectWithoutUsersInput } from "../inputs/OrganisationCreateOrConnectWithoutUsersInput";
import { OrganisationCreateWithoutUsersInput } from "../inputs/OrganisationCreateWithoutUsersInput";
import { OrganisationUpdateWithoutUsersInput } from "../inputs/OrganisationUpdateWithoutUsersInput";
import { OrganisationUpsertWithoutUsersInput } from "../inputs/OrganisationUpsertWithoutUsersInput";
import { OrganisationWhereUniqueInput } from "../inputs/OrganisationWhereUniqueInput";

@NestJS.InputType("OrganisationUpdateOneWithoutUsersNestedInput", {
  isAbstract: true
})
export class OrganisationUpdateOneWithoutUsersNestedInput {
  @NestJS.Field(_type => OrganisationCreateWithoutUsersInput, {
    nullable: true
  })
  create?: OrganisationCreateWithoutUsersInput | undefined;

  @NestJS.Field(_type => OrganisationCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: OrganisationCreateOrConnectWithoutUsersInput | undefined;

  @NestJS.Field(_type => OrganisationUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: OrganisationUpsertWithoutUsersInput | undefined;

  @NestJS.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @NestJS.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @NestJS.Field(_type => OrganisationWhereUniqueInput, {
    nullable: true
  })
  connect?: OrganisationWhereUniqueInput | undefined;

  @NestJS.Field(_type => OrganisationUpdateWithoutUsersInput, {
    nullable: true
  })
  update?: OrganisationUpdateWithoutUsersInput | undefined;
}
