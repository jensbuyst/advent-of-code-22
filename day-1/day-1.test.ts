import {countCalories} from "./day-1";

const GIVEN_EXAMPLE = [
    "1000",
    "2000",
    "3000",
    "",
    "4000",
    "",
    "5000",
    "6000",
    "",
    "7000",
    "8000",
    "9000",
    "",
    "10000"
]
describe('Counting calories', function () {

    it('should return the calories carried by an elf', function () {
        expect(countCalories(["1000"])).toEqual("1000")
    });
});

