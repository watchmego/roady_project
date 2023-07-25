import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

export 'call_api.dart';

final HttpLink httpLink = HttpLink("http://10.0.2.2:3000/graphql");
final ValueNotifier<GraphQLClient> client = ValueNotifier<GraphQLClient>(
  GraphQLClient(link: httpLink, cache: GraphQLCache()),
);

const String getUsers = """
  query Users {
  users {
    id, name
  }
}
""";

const String ping = """
  query Ping {
    __typename
  }
  """;
