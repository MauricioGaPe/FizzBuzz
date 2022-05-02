const FizzBuzzService = require("../../lib/services/fizzbuzzService");
const Reader = require("../../lib/utils/Reader");

describe("Test para FizzBuzzService", () => {
    test("Método applyValidationInExplorer", () => {
        const applyValidationInExplorer = FizzBuzzService.applyValidationInExplorer(Reader.readJsonFile("explorers.json"));
        applyValidationInExplorer.forEach(explorer => {
            if(explorer.score%5 === 0 && explorer.score%3 === 0){
                expect(explorer.trick).toBe("FIZZBUZZ");
            } else if(explorer.score%3 === 0){
                expect(explorer.trick).toBe("FIZZ");
            } else if(explorer.score%5 === 0){
                expect(explorer.trick).toBe("BUZZ");
            } else {
                expect(explorer.trick).toBe(explorer.score);
            }
        });
    });
});