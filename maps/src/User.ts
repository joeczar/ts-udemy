import faker from 'faker';

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: Number(faker.address.latitude()),
            lng: Number(faker.address.longitude()),
        };
    }
}
