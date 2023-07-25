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

//Provider for state
class APINotifier extends ChangeNotifier {

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

class UserPage extends StatefulWidget {
  const UserPage({super.key});

  @override
  State<UserPage> createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  List<dynamic>? users;

  // Define the fetchUsers function here
  void fetchUsers() async {
    try {
      final dynamic result = await queryAPI(getUsers);
      if (result is QueryResult) {
        setState(() {
          users = result.data!['users'];
        });
      } else {
        print('Invalid Query Result');
      }
    } catch (e) {
      print('An error occurred: $e');
    }
  }

  @override
  void initState() {
    super.initState();
    fetchUsers();
  }

  @override
  Widget build(BuildContext context) {
    if (users == null) {
      // Show a loading circle while fetching data
      return const Center(
        child: CircularProgressIndicator(),
      );
    } else if (users!.isEmpty) {
      return const Text('No data found');
    }

    return ListView.builder(
      itemCount: users!.length,
      itemBuilder: (context, index) {
        final name = users![index]['name'];
        final email = users![index]['email'];
        return SearchRow(name: name, email: email);
      },
    );
  }
}

class OrgPage extends StatefulWidget {
  const OrgPage({super.key});

  @override
  State<OrgPage> createState() => _OrgPageState();
}

class _OrgPageState extends State<OrgPage> {
    List<dynamic>? org;

    // Define the fetchUsers function here
    void fetchOrg() async {
      try {
        final dynamic result = await queryAPI(getOrg);
        if (result is QueryResult) {
          setState(() {
            org = result.data!['organisations'];
          });
        } else {
          print('Invalid Query Result');
        }
      } catch (e) {
        print('An error occurred: $e');
      }
    }

    @override
    void initState() {
      super.initState();
      fetchOrg();
    }

    @override
    Widget build(BuildContext context) {
      if (org == null) {
        // Show a loading circle while fetching data
        return const Center(
          child: CircularProgressIndicator(),
        );
      } else if (org!.isEmpty) {
        return const Text('No data found');
      }

      return ListView.builder(
        itemCount: org!.length,
        itemBuilder: (context, index) {
          final name = org![index]['name'];
          return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            name,
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(
            height: 10,
          ),
        ],
      ),
    );
        },
      );
    }
  }
