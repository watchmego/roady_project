import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:provider/provider.dart';
import 'package:roady_api_client/api/call_api.dart';
import 'package:roady_api_client/state/state_provider.dart';
import 'package:roady_api_client/views/search_row.dart';

class UserOrgPage extends StatefulWidget {
  const UserOrgPage({Key? key, required this.org}) : super(key: key);

  final List org;

  @override
  State<UserOrgPage> createState() => _UserOrgPageState();
}

class _UserOrgPageState extends State<UserOrgPage> {
  List<dynamic>? users;

  // using call_api.dart, fetch users
  void fetchUsers(orgID) async {
    try {
      print('org id');
      print(orgID);
      final dynamic result = await queryAPIwVariable(getOrgUsers, orgID);
      if (result is QueryResult) {
        setState(() {
          users = result.data!['users'];
          print('user list');
          print(users);
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
    fetchUsers(widget.org[0]['organisationId']);
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

    return Container(
      padding: const EdgeInsets.all(30),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'Organisation: ${widget.org[0]['organisation']['name']}',
            style: const TextStyle(fontWeight: FontWeight.bold),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: users!.length,
              itemBuilder: (context, index) {
                final image = users![index]['imageSmall'];
                final name = users![index]['name'];
                final email = users![index]['email'];
                return SearchRow(name: name, email: email, image: image);
              },
            ),
          ),
        ],
      ),
    );
  }
}
