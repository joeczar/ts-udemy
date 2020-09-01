import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'red';

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: Number(faker.address.latitude()),
            lng: Number(faker.address.longitude()),
        };
    }

    markerContent(): string {
        return `Name: ${this.name}`;
    }
}
