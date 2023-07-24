import * as NestJS from "@nestjs/graphql";

export enum TransactionIsolationLevel {
  ReadUncommitted = "ReadUncommitted",
  ReadCommitted = "ReadCommitted",
  RepeatableRead = "RepeatableRead",
  Serializable = "Serializable"
}
NestJS.registerEnumType(TransactionIsolationLevel, {
  name: "TransactionIsolationLevel",
  description: undefined,
});
