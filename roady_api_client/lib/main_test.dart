import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    final HttpLink httpLink = HttpLink('http://10.0.2.2:3000/graphql/');

    final ValueNotifier<GraphQLClient> client = ValueNotifier<GraphQLClient>(
      GraphQLClient(
        link: httpLink,
        cache: GraphQLCache(),
      ),
    );

    return GraphQLProvider(
      client: client,
      child: MaterialApp(
        title: 'GraphQL Query Demo',
        home: Scaffold(
          appBar: AppBar(
            title: const Text('GraphQL Query Demo'),
          ),
          body: const UserPage(),
        ),
      ),
    );
  }
}

class UserPage extends StatelessWidget {
  const UserPage();

  @override
  Widget build(BuildContext context) {
    return Query(
      options: QueryOptions(
        document: gql(
          '''
          query FindFirstUser {
            findFirstUser {
              name
              email
            }
          }
          ''',
        ),
      ),
      builder: (
        QueryResult result, {
        Refetch? refetch,
        FetchMore? fetchMore,
      }) {
        if (result.isLoading) {
          return const Center(child: CircularProgressIndicator());
        }

        if (result.hasException) {
          return Text(result.exception.toString());
        }

        if (result.data == null) {
          return const Center(child: Text('No data found'));
        }

        final user = result.data!['findFirstUser'];
        final name = user['name'];
        final email = user['email'];

        return ListTile(
          title: Text(name),
          subtitle: Text(email),
        );
      },
    );
  }
}
