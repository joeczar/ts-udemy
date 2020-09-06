@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';
  @testDecorator
  get formattedColor(): string {
    return `This boat is ${this.color}`;
  }
  @logError('Boat was sunk, bitches.')
  pilot(@paramDeco speed: string, @paramDeco wake: boolean): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function paramDeco(target: any, key: string, index: number) {
  console.log({ key, index });
}

function testDecorator(target: any, key: String) {
  console.log(key);
}
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (err) {
        console.log(errorMessage);
      }
    };
  };
}
// new Boat().pilot('fast');
