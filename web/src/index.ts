import { User } from './models/User';

const user = new User({ name: 'Azriel', age: 999 });

user.events.on('click', () => console.log('Eat click!'));

user.events.trigger('click');
