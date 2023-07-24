import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export const crudResolversMap = {
  Organisation: crudResolvers.OrganisationCrudResolver,
  User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
  Organisation: {
    aggregateOrganisation: actionResolvers.AggregateOrganisationResolver,
    createManyOrganisation: actionResolvers.CreateManyOrganisationResolver,
    createOneOrganisation: actionResolvers.CreateOneOrganisationResolver,
    deleteManyOrganisation: actionResolvers.DeleteManyOrganisationResolver,
    deleteOneOrganisation: actionResolvers.DeleteOneOrganisationResolver,
    findFirstOrganisation: actionResolvers.FindFirstOrganisationResolver,
    findFirstOrganisationOrThrow: actionResolvers.FindFirstOrganisationOrThrowResolver,
    organisations: actionResolvers.FindManyOrganisationResolver,
    organisation: actionResolvers.FindUniqueOrganisationResolver,
    getOrganisation: actionResolvers.FindUniqueOrganisationOrThrowResolver,
    groupByOrganisation: actionResolvers.GroupByOrganisationResolver,
    updateManyOrganisation: actionResolvers.UpdateManyOrganisationResolver,
    updateOneOrganisation: actionResolvers.UpdateOneOrganisationResolver,
    upsertOneOrganisation: actionResolvers.UpsertOneOrganisationResolver
  },
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  }
};
const crudResolversInfo = {
  Organisation: ["aggregateOrganisation", "createManyOrganisation", "createOneOrganisation", "deleteManyOrganisation", "deleteOneOrganisation", "findFirstOrganisation", "findFirstOrganisationOrThrow", "organisations", "organisation", "getOrganisation", "groupByOrganisation", "updateManyOrganisation", "updateOneOrganisation", "upsertOneOrganisation"],
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"]
};
const argsInfo = {
  AggregateOrganisationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyOrganisationArgs: ["data", "skipDuplicates"],
  CreateOneOrganisationArgs: ["data"],
  DeleteManyOrganisationArgs: ["where"],
  DeleteOneOrganisationArgs: ["where"],
  FindFirstOrganisationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstOrganisationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrganisationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueOrganisationArgs: ["where"],
  FindUniqueOrganisationOrThrowArgs: ["where"],
  GroupByOrganisationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyOrganisationArgs: ["data", "where"],
  UpdateOneOrganisationArgs: ["data", "where"],
  UpsertOneOrganisationArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Organisation: relationResolvers.OrganisationRelationsResolver,
  User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
  Organisation: ["users"],
  User: ["organisation"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Organisation: ["id", "createdAt", "updatedAt", "name"],
  User: ["id", "createdAt", "updatedAt", "email", "name", "role", "organisationId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateOrganisation: ["_count", "_min", "_max"],
  OrganisationGroupBy: ["id", "createdAt", "updatedAt", "name", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "updatedAt", "email", "name", "role", "organisationId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  OrganisationCount: ["users"],
  OrganisationCountAggregate: ["id", "createdAt", "updatedAt", "name", "_all"],
  OrganisationMinAggregate: ["id", "createdAt", "updatedAt", "name"],
  OrganisationMaxAggregate: ["id", "createdAt", "updatedAt", "name"],
  UserCountAggregate: ["id", "createdAt", "updatedAt", "email", "name", "role", "organisationId", "_all"],
  UserMinAggregate: ["id", "createdAt", "updatedAt", "email", "name", "role", "organisationId"],
  UserMaxAggregate: ["id", "createdAt", "updatedAt", "email", "name", "role", "organisationId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  OrganisationWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "users"],
  OrganisationOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "users"],
  OrganisationWhereUniqueInput: ["id"],
  OrganisationOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "_count", "_max", "_min"],
  OrganisationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "name", "role", "organisation", "organisationId"],
  UserOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "email", "name", "role", "organisation", "organisationId"],
  UserWhereUniqueInput: ["id"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "email", "name", "role", "organisationId", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "name", "role", "organisationId"],
  OrganisationCreateInput: ["id", "createdAt", "updatedAt", "name", "users"],
  OrganisationUpdateInput: ["id", "createdAt", "updatedAt", "name", "users"],
  OrganisationCreateManyInput: ["id", "createdAt", "updatedAt", "name"],
  OrganisationUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "name"],
  UserCreateInput: ["id", "createdAt", "updatedAt", "email", "name", "role", "organisation"],
  UserUpdateInput: ["id", "createdAt", "updatedAt", "email", "name", "role", "organisation"],
  UserCreateManyInput: ["id", "createdAt", "updatedAt", "email", "name", "role", "organisationId"],
  UserUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "email", "name", "role"],
  UuidFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  UserListRelationFilter: ["every", "some", "none"],
  UserOrderByRelationAggregateInput: ["_count"],
  OrganisationCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  OrganisationMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  OrganisationMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  UuidWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumUserRoleNullableFilter: ["equals", "in", "notIn", "not"],
  OrganisationRelationFilter: ["is", "isNot"],
  UuidNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "mode", "not"],
  UserCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "name", "role", "organisationId"],
  UserMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "name", "role", "organisationId"],
  UserMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "name", "role", "organisationId"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumUserRoleNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  UuidNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "mode", "not", "_count", "_min", "_max"],
  UserCreateNestedManyWithoutOrganisationInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateManyWithoutOrganisationNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OrganisationCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableEnumUserRoleFieldUpdateOperationsInput: ["set"],
  OrganisationUpdateOneWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedUuidFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedUuidWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumUserRoleNullableFilter: ["equals", "in", "notIn", "not"],
  NestedUuidNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumUserRoleNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedUuidNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UserCreateWithoutOrganisationInput: ["id", "createdAt", "updatedAt", "email", "name", "role"],
  UserCreateOrConnectWithoutOrganisationInput: ["where", "create"],
  UserCreateManyOrganisationInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithWhereUniqueWithoutOrganisationInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutOrganisationInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutOrganisationInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "name", "role", "organisationId"],
  OrganisationCreateWithoutUsersInput: ["id", "createdAt", "updatedAt", "name"],
  OrganisationCreateOrConnectWithoutUsersInput: ["where", "create"],
  OrganisationUpsertWithoutUsersInput: ["update", "create"],
  OrganisationUpdateWithoutUsersInput: ["id", "createdAt", "updatedAt", "name"],
  UserCreateManyOrganisationInput: ["id", "createdAt", "updatedAt", "email", "name", "role"],
  UserUpdateWithoutOrganisationInput: ["id", "createdAt", "updatedAt", "email", "name", "role"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

