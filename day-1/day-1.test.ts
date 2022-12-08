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
    describe('of an elf', function () {
        it('with 1 piece of food', function () {
            expect(countCalories(["1000"])).toEqual(1000)
        });
        it('with 2 pieces of food', function () {
            expect(countCalories(["1000", "2000"])).toEqual(3000)
        });
    });

});

