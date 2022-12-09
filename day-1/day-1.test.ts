import {countCalories, maxCalories, readCaloriesFromFile, splitInElves} from "./day-1";

describe("Read file", () => {
    it("and parse strings to numbers", () => {
        const file = readCaloriesFromFile();
        expect(file).toEqual([1000, 1000, NaN, 3000])

    })
})

describe("Elf creator", () => {
    it("creates Elves from calorie list", () => {
        expect(splitInElves( [1000, 1000, NaN, 2000])).toEqual([[1000, 1000], [2000]])
    })
})

describe("Count calories per Elf", () => {
    it("holding 1 piece of food", () => {
        expect(countCalories([1000])).toEqual(1000)
    })

    it("holding 2 pieces of food", () => {
        expect(countCalories([1000, 1000])).toEqual(2000)
    })
})

describe("Count max calories", () => {
    it("works", () => {
        expect(maxCalories([[5000, 1000], [2000]])).toEqual(6000)
    })
})

describe("Day 1 solution", () => {
    it("returns the maximum amount of calories for the given input file", () => {
        const input = readCaloriesFromFile('./day-1-input.txt');
        const elves = splitInElves(input);

        expect(maxCalories(elves)).toEqual(64929)
    })
})

