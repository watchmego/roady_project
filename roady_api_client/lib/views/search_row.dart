import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:roady_api_client/state/state_provider.dart';
import 'package:roady_api_client/views/profile_page.dart';

//display rows of users

class SearchRow extends StatelessWidget {
  final String name;
  final String email;
  final String image;

  const SearchRow({
    Key? key,
    required this.name,
    required this.email,
    required this.image,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    APINotifier apiNotifier = Provider.of<APINotifier>(context, listen: false);
    return InkWell(
      onTap: () {
        print('tapped');
        apiNotifier.changeCurrentWidget(ProfilePage());
      },
      child: Row(
        children: [
          Expanded(
            flex: 1,
            child: Image.network(image, fit: BoxFit.contain),
          ),
          Expanded(
            flex: 3,
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
                Text(
                  email,
                  style: Theme.of(context).textTheme.bodyMedium,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
