const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

// only do this if there is no chance of returning anything (very rare)
const throwError = (message: string): never => {
    throw new Error(message);
};
// better example 1
const throwErrorBetter = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
};
// Best practice
const throwErrorBest = (message: string): string => {
    if (!message) {
        throw new Error(message);
    } else {
        return message;
    }
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny',
};

const logWeather = ({
    date,
    weather,
}: {
    date: Date;
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);
