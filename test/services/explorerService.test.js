const ExplorerService = require('../../lib/services/explorerService');
const Reader = require("../../lib/utils/reader")

describe('Test explorerService', () => {
    test('Test de filterByMission', () => {
        const filterByMission = ExplorerService.filterByMission(Reader.readJsonFile("explorers.json"), "node");
        filterByMission.forEach(explorer => {
            expect(explorer.mission).toBe("node");
        });
    });

    test('Test de getAmountOfExplorersByMission', () => {
        const getAmountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(Reader.readJsonFile("explorers.json"), "node");
        expect(getAmountOfExplorersByMission).toBe(10);
    });

    test('Test de getExplorersUsernamesByMission', () => {
        const getExplorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(Reader.readJsonFile("explorers.json"), "node");
        expect(getExplorersUsernamesByMission).not.toBeUndefined();
    });
});