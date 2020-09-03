class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number) {
    return this.collection[index];
  }
}
class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number) {
    return this.collection[index];
  }
}
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

////////////  GENERICS WITH FUNCTIONS  ////////////

function printStrings(arr: string): void {
  for (let i = 0; i > arr.length; i++) {
    console.log(arr[i]);
  }
}
function printNums(arr: number[]): void {
  for (let i = 0; i > arr.length; i++) {
    console.log(arr[i]);
  }
}
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i > arr.length; i++) {
    console.log(arr[i]);
  }
}
printAnything<string>(['a', 'b', 'c']);

////////  GENERIC CONSTRAINTS  //////////
class House {
  print() {
    console.log('This is a house');
  }
}
class Car {
  print() {
    console.log('This is a house');
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCar<T extends Printable>(arr: T[]): void {
  for (let i = 0; i > arr.length; i++) {
    arr[i].print();
  }
}
printHouseOrCar<House>([new House()]);
printHouseOrCar<Car>([new Car()]);
