import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:provider/provider.dart';
import '../api/call_api.dart';
import '../state/state_provider.dart';

export 'login_widget.dart';

class LoginPage extends StatelessWidget {
  LoginPage({Key? key}) : super(key: key);
  final _formKey = GlobalKey<FormState>();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  fetchUsers(email) async {
    try {
      final dynamic result = await queryAPIwVariable(login, email);
      if (result is QueryResult) {
        print(result.data!['users'][0]['id']);
        if (!result.data!['users'][0]['id'].isEmpty) {
          return result.data!['users'];
        }
      } else {
        print('Invalid Query Result');
      }
    } catch (e) {
      print('An error occurred: $e');
    }
    print('failed to match user');
    return List.empty();
  }

  @override
  Widget build(BuildContext context) {
    APINotifier apiNotifier = Provider.of<APINotifier>(context, listen: false);
    return Form(
      key: _formKey,
      child: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(30),
          child: Center(
            child: SizedBox(
              width: 300,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const Text(
                    'Login',
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 35),
                  TextFormField(
                    controller: emailController,
                    decoration: const InputDecoration(
                        border: OutlineInputBorder(), labelText: "Email"),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Please enter your email';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 35),
                  TextFormField(
                    controller: passwordController,
                    obscureText: true,
                    decoration: const InputDecoration(
                        border: OutlineInputBorder(), labelText: "Password"),
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return 'Please enter your password';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 30),
                  ElevatedButton(
                    onPressed: () async {
                      if (_formKey.currentState!.validate()) {
                        List<dynamic> data =
                            await fetchUsers(emailController.text);
                        print('fetch users complete');
                        if (data.isNotEmpty) {
                          print('contains data');
                          apiNotifier.setUserData(data);
                          apiNotifier.setLoggedIn(true);
                          print('displaying user data');
                          print(apiNotifier.userData);
                        }
                      }
                    },
                    child: const Text('Submit'),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
