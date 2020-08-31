interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    },
};

const cola = {
    color: 'brown',
    sugar: 40,
    summary(): string {
        return `My Cola has${this.sugar} grams of sugar`;
    },
};

const printSummary = (item: Reportable): void => {
    console.log(`Name: ${item.summary}`);
};

printSummary(oldCivic);
printSummary(cola);
