class Vehicle {
    constructor(public color: string) {}

    protected honk(): void {
        console.log('honk!');
    }
}
const newCar = new Vehicle('orange');
console.log(newCar.color);

class Auto extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log('Vroom!');
    }
    startDriving(): void {
        this.drive();
        this.honk();
    }
}

const anotherCar = new Auto(4, 'red');
