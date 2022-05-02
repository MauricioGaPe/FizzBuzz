const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
    test("Test de getExplorersByMission", () => {
        const ExplorersByMission = ExplorerController.getExplorersByMission("node");
        ExplorersByMission.forEach(explorer => {
            expect(explorer.mission).toBe("node");
        });
    });

    test("Test de getExplorersUsernamesByMission", () => {
        const ExplorersUsernamesByMission = ExplorerController.getExplorersUsernamesByMission("node");
        expect(ExplorersUsernamesByMission).toBe(10);
    });

    test("Test de getExplorersAmonutByMission", () => {
        const ExplorersAmonutByMission = ExplorerController.getExplorersAmonutByMission("node");
        expect(ExplorersAmonutByMission).not.toBeUndefined();
    });

    test("Test de applyValidationInExplorer", () => {
        const ValidationInExplorer = ExplorerController.applyValidationInExplorer();
        ValidationInExplorer.forEach(explorer => {
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