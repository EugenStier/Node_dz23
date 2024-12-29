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
exports.delay = delay;
exports.executePromisesSequentially = executePromisesSequentially;
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Completed after ${ms} ms`);
        }, ms);
    });
}
function executePromisesSequentially() {
    return __awaiter(this, void 0, void 0, function* () {
        const result1 = yield delay(1000);
        console.log(result1); // Output after 1 second
        const result2 = yield delay(2000);
        console.log(result2); // Output after 2 seconds
        const result3 = yield delay(1500);
        console.log(result3); // Output after 1.5 seconds
    });
}
