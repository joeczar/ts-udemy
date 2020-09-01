import { Sorter } from './Sorter';
import { NumbersCollection } from './NumCollection';
import { CharCollection } from './CharCollection';
import { LinkedList } from './LinkedList';

const numCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numCollection);
sorter.sort();
console.log(numCollection.data);

const charCollection = new CharCollection('öoalkiSADFHadqlSADJGHhkj');
const charSort = new Sorter(charCollection);
charSort.sort();
console.log(charCollection.data);

const linkedList = new LinkedList(500, -10, -3, 4);
linkedList.print();
const sortList = new Sorter(linkedList);
sortList.sort();
linkedList.print();
