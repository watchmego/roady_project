import 'package:provider/provider.dart';
import 'package:flutter/material.dart';
import 'package:roady_api_client/main.dart';
import 'package:roady_api_client/views/user_org_page.dart';
import '../views/login_widget.dart';

export 'state_provider.dart';

class APINotifier extends ChangeNotifier {
  bool _loggedIn = false;

  bool get loggedIn => _loggedIn;

  void setLoggedIn(bool value) {
    _loggedIn = value;
    print('showing userdata');
    print(_userData);
    if (_loggedIn) {
      changeCurrentWidget(UserOrgPage(org: _userData));
    } else {
      changeCurrentWidget(LoginPage());
    }
    notifyListeners();
  }

  Widget _currentWidget = LoginPage();

  Widget get currentWidget => _currentWidget;

  void changeCurrentWidget(Widget newWidget) {
    _currentWidget = newWidget;
    notifyListeners();
  }

  late List<dynamic> _userData;

  List<dynamic> get userData => _userData;

  void setUserData(List<dynamic> data) {
    _userData = data;
    notifyListeners();
  }
}
