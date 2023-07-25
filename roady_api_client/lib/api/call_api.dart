import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

export 'call_api.dart';

//initialise graphql URL/Client

final HttpLink httpLink = HttpLink("http://10.0.2.2:3000/graphql");
final ValueNotifier<GraphQLClient> client = ValueNotifier<GraphQLClient>(
  GraphQLClient(link: httpLink, cache: GraphQLCache()),
);

// user query for graphql
const String getUsers = """
  query Users {
  users {
    id, name, email
  }
}
""";

// organisation query for graphql
const String getOrg = """
  query Organisations {
  organisations {
    id, name
  }
}
""";

// reusable query component
Future<dynamic> queryAPI(String queryName) async {
  final QueryResult result =
      await client.value.query(QueryOptions(document: gql(queryName)));
  if (result.hasException || result.data == null) {
    return [];
  }

  return result;
}
