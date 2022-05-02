const Reader = require("../../lib/utils/reader");

describe("Test reader", () => {
    test("El archivo debería ser consultado exitosamente", () => {
        const archJson = Reader.readJsonFile("explorers.json");
        expect(archJson).not.toBeUndefined();
    });
    test("El archivo debería mandar undefined", () => {
        const archJson = Reader.readJsonFile("noExiste.json");
        expect(archJson).toBeUndefined();       
    });
});