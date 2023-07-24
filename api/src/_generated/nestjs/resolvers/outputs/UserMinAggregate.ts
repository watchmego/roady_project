import * as NestJS from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserRole } from "../../enums/UserRole";

@NestJS.ObjectType("UserMinAggregate", {
  isAbstract: true
})
export class UserMinAggregate {
  @NestJS.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @NestJS.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @NestJS.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @NestJS.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @NestJS.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @NestJS.Field(_type => UserRole, {
    nullable: true
  })
  role!: "admin" | "supplier" | "contributor" | "user" | null;

  @NestJS.Field(_type => String, {
    nullable: true
  })
  organisationId!: string | null;
}
