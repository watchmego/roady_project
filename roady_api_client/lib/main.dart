import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:provider/provider.dart';
import 'api/call_api.dart';
import 'views/search_row.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => APINotifier(),
      child: GraphQLProvider(
        client: client,
        child: MaterialApp(
          title: 'Roady Project',
          home: Scaffold(
            appBar: AppBar(
              title: const Text('Roady Project'),
              centerTitle: true,
            ),
            body: Column(
              children: [
                const AppBarWidget(),
                Consumer<APINotifier>(
                  builder: (context, apiNotifier, child) {
                    print(apiNotifier.currentWidget);
                    return Expanded(
                      child: apiNotifier.currentWidget,
                    );
                  },
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class APINotifier extends ChangeNotifier {
  List<Map<String, dynamic>> _searchList = [];

  List<Map<String, dynamic>> get searchList => _searchList;

  void setBlogPosts(List<Map<String, dynamic>> searchList) {
    _searchList = searchList;
    notifyListeners();
  }

  Widget _currentWidget = OrgPage();

  Widget get currentWidget => _currentWidget;

  void changeCurrentWidget(Widget newWidget) {
    _currentWidget = newWidget;
    notifyListeners();
  }
}

class AppBarWidget extends StatefulWidget {
  const AppBarWidget({Key? key}) : super(key: key);
  @override
  State<AppBarWidget> createState() => _AppBarWidgetState();
}

class _AppBarWidgetState extends State<AppBarWidget> {
  var pageName = "Org";

  @override
  Widget build(BuildContext context) {
    final ButtonStyle style = TextButton.styleFrom(
      foregroundColor: Theme.of(context).colorScheme.onPrimary,
    );
    APINotifier apiNotifier = Provider.of<APINotifier>(context, listen: false);

    return AppBar(
      actions: <Widget>[
        TextButton(
          style: style,
          onPressed: () {
            apiNotifier.changeCurrentWidget(const OrgPage());
          },
          child: const Text('Org'),
        ),
        TextButton(
          style: style,
          onPressed: () {
            apiNotifier.changeCurrentWidget(const UserPage());
            print('changing to user page');
          },
          child: const Text('User'),
        ),
      ],
    );
  }
}

class UserPage extends StatelessWidget {
  const UserPage({super.key});

  @override
  Widget build(BuildContext context) {
  
        return Query(
          options: QueryOptions(
            document: gql(getUsers),
          ),
          builder: (result, {fetchMore, refetch}) {
        print('querying....');
        print(result);
        if (result.hasException) {
          print(result.exception.toString());
        }
        if (result.isLoading) {
          print('loading...');
          return const Center(
            child: CircularProgressIndicator(),
          );
        }
        if (result.data == null) {
          ('no data found');
          return const Center(
            child: Text("No article found!"),
          );
        }
        

        final users = result.data!['findFirstUser'];
        print('found data $users');
        return ListView.builder(
            itemCount: users.length,
            itemBuilder: (context, index) {
              final name = users['name'];
              final email = users['email'];
              return SearchRow(name: name, email: email);
            });
      },
    );
  }
}

class OrgPage extends StatelessWidget {
  const OrgPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
