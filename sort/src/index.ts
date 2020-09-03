import { NumbersCollection } from './NumCollection';
import { CharCollection } from './CharCollection';
import { LinkedList } from './LinkedList';

const numCollection = new NumbersCollection([10, 3, -5, 0]);
numCollection.sort();
console.log(numCollection.data);

const charCollection = new CharCollection('öoalkiSADFHadqlSADJGHhkj');

charCollection.sort();
console.log(charCollection.data);

const linkedList = new LinkedList(500, -10, -3, 4);
linkedList.print();

linkedList.sort();
linkedList.print();
