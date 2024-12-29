"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("./promises");
const asyncProcessing_1 = require("./asyncProcessing");
const errorHandling_1 = require("./errorHandling");
const dynamicDelay_1 = require("./dynamicDelay");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Starting sequential promises:");
        yield (0, promises_1.executePromisesSequentially)();
        console.log("\nProcessing strings:");
        const processedStrings = yield (0, asyncProcessing_1.processStrings)([
            "hello",
            "world",
            "typescript",
        ]);
        console.log(processedStrings); // Output: ['HELLO', 'WORLD', 'TYPESCRIPT']
        console.log("\nHandling promise errors:");
        yield (0, errorHandling_1.handlePromiseErrors)();
        console.log("\nDynamic delays:");
        yield (0, dynamicDelay_1.dynamicDelay)([500, 1000, 1500]);
    });
}
main();
