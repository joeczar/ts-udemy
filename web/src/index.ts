import { User } from './models/User';

const user = new User({ name: 'Azriel', age: 999 });

user.save();

setTimeout(() => console.log(user), 2000);
