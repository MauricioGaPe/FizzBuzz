const fs = require("fs");

class Reader {
    static readJsonFile(name){
        try {
            return JSON.parse(fs.readFileSync(name));
        } catch (error) {
            return undefined;
        }
    }
}

module.exports = Reader;