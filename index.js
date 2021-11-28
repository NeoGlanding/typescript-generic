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
// 1. Generic Types adalah sebuah type yang saling berkaitan dengan type lain.
const arr = ['Eko', 'Kurniawan', 'Khannedy']; // => string[];
const judi = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rand = Math.random();
        if (rand > 0.5) {
            resolve('You are win the gambling');
        }
        else {
            reject('You are lose');
        }
    }, 700);
});
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const x = yield judi;
            console.log(x.split(' '));
            // console.log(Math.trunc(x)) => Bakal error karena expected output nya adalah string
        }
        catch (error) {
            console.log(error);
        }
    });
}
test();
