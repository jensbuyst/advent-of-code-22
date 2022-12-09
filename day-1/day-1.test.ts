import {readCaloriesFromFile, splitInElves} from "./day-1";

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

