import {readFileSync} from "fs";

export const readCaloriesFromFile = () => {
    const file = readFileSync('./testFile.txt', 'utf-8').split(/\r?\n/);
    return file.map(calorie => parseInt(calorie));
};

export function splitInElves(input: number[]) {
    return input.reduce((acc, curr, index) => {
        if(acc.length === 0) {
            acc.push([])
        }

        if(Number.isNaN(curr)) {
            acc.push([])
            return acc;
        }

        acc[acc.length - 1].push(curr)

        return acc;
    }, [] as number[][])
}