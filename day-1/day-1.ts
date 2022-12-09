import {readFileSync} from "fs";

export const readCaloriesFromFile = (path: string = './testFile.txt'): number[] => {
    const file = readFileSync(path, 'utf-8').split(/\r?\n/);
    return file.map(calorie => parseInt(calorie));
};

export const splitInElves = (input: number[]): number[][] => {
    return input.reduce((acc, curr) => {
        if (acc.length === 0) {
            acc.push([])
        }

        if (Number.isNaN(curr)) {
            acc.push([])
            return acc;
        }

        acc[acc.length - 1].push(curr)

        return acc;
    }, [] as number[][]);
};

export const countCalories = (elf: number[]) => elf.reduce((prev, curr) => prev + curr, 0);

export const maxCalories = (elves: number[][]) => {
    return Math.max(...elves.map(elf => countCalories(elf)))
}