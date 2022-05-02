const FizzBuzzService = require("../../lib/services/FizzbuzzService");
const ExplorerService = require("../../lib/services/explorerService");
const Reader = require("../../lib/utils/reader");

class ExplorerController {
    static getExplorersByMission(mission){
        return ExplorerService.filterByMission(Reader.readJsonFile("explorers.json"), mission);
    }

    static getExplorersUsernamesByMission(mission){
        return ExplorerService.getExplorersUsernamesByMission(Reader.readJsonFile("explorers.json"), mission);
    }

    static getExplorersAmonutByMission(mission){
        return ExplorerService.getAmountOfExplorersByMission(Reader.readJsonFile("explorers.json"), mission);
    }

    static applyValidationInExplorer(){
        return FizzBuzzService.applyValidationInExplorer(Reader.readJsonFile("explorers.json"));
    }
}

module.exports = ExplorerController;