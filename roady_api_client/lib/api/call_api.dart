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
    id, name, email
  }
}
""";

const String getOrg = """
  query Organisations {
  organisations {
    id, name
  }
}
""";

Future<dynamic> queryAPI(String queryName) async {
  final QueryResult result =
      await client.value.query(QueryOptions(document: gql(queryName)));
  if (result.hasException || result.data == null) {
    return [];
  
  }

  print(result);
  return result;
}
