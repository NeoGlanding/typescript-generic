"use strict";
// 1. Generic Types adalah sebuah type yang saling berkaitan dengan type lain.
const arr = ['Eko', 'Kurniawan', 'Khannedy']; // => string[];
// const judi: Promise<string> = new Promise((resolve, reject) => {
//  setTimeout(()=> {
//     let rand = Math.random();
//     if (rand > 0.5) {
//         resolve('You are win the gambling')
//     } else {
//         reject('You are lose')
//     }
//  }, 700)
// });
// async function test() {
//     try {
//         const x = await judi;
//         console.log(x.split(' '))
//         // console.log(Math.trunc(x)) => Bakal error karena expected output nya adalah string
//     } catch (error) {
//         console.log(error)
//     }
// }
// test()
// 2. Build an own generic function
function mergeObj(param1, param2) {
    return Object.assign(Object.assign({}, param1), param2);
}
// const stats = mergeObj({name: 'ihsan'}, {age: 18});
// console.log(stats.age);
// 3. Using Constraints
function mergeObj2(param1, param2) {
    return Object.assign(Object.assign({}, param1), param2);
}
const myProfile = mergeObj2({ name: 'Ihsan' }, { age: 18 });
const x = (param1) => {
    if (param1.length === 1) {
        return 'You got no length';
    }
    return 'The length of ' + param1 + ' is ' + param1.length;
};
const ihsan = x('Ihsan');
// console.log(ihsan)
// 5. keyof constraints
function describeObject(obj, key) {
    return obj[key];
}
const ihsan2 = describeObject({ name: 'Ihsan' }, 'name');
// console.log(ihsan2)
// 6. Generic Class
class LocalStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter(el => el !== item);
    }
    getItem() {
        return this.data;
    }
}
const numberStorage = new LocalStorage();
numberStorage.addItem(20);
numberStorage.addItem(10);
console.log(numberStorage.getItem());
numberStorage.removeItem(20);
console.log(numberStorage.getItem());
