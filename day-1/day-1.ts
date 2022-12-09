import {readFileSync} from "fs";

export const readCaloriesFromFile = (path: string = './testFile.txt'): number[] => {
    const file = readFileSync(path, 'utf-8').split(/\r?\n/);
    return file.map(calorie => parseInt(calorie));
};

export const splitInElves = (input: number[]): number[][] => {
    return input.reduce((prev, curr) => {
        if (prev.length === 0) {
            prev.push([])
        }

        if (Number.isNaN(curr)) {
            prev.push([])
            return prev;
        }

        prev[prev.length - 1].push(curr)

        return prev;
    }, [] as number[][]);
};

export const countCalories = (elf: number[]) => elf.reduce((prev, curr) => prev + curr, 0);

export const maxCalories = (elves: number[][]) => {
    return Math.max(...elves.map(elf => countCalories(elf)))
}

export const top3Calories = (elves: number[][]) => {
    const top3elves = elves.map(elf => countCalories(elf)).sort().reverse().slice(0, 3);
    return top3elves.reduce((prev, curr) => prev + curr, 0);
}