import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { userUrl } from './urls.json';
import { UserProps, User } from './models/User';

const users = new Collection(userUrl, (json: UserProps) => {
  return User.buildUser(json);
});

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    console.log(root);

    const userList = new UserList(root, users);
    userList.render();
  }
});

users.fetch();
