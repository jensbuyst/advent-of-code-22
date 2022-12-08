import {readFileSync} from "fs";
import day1 from "./day-1";

let input: string[] = readFileSync('./day-1-input.txt', 'utf-8').split(/\r?\n/);

describe('Counting calories', function () {

    it('should blabla', function () {
        expect(day1().countingCalories).toEqual(0)
        console.log(input);
    });
});
