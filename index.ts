// 1. Generic Types adalah sebuah type yang saling berkaitan dengan type lain.
const arr: Array<string> = ['Eko', 'Kurniawan', 'Khannedy'] // => string[];

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
function mergeObj<T, U>(param1: T, param2: U) {
    return {
        ...param1,
        ...param2
    }
}

// const stats = mergeObj({name: 'ihsan'}, {age: 18});
// console.log(stats.age);

// 3. Using Constraints
function mergeObj2<T extends object, U extends object>(param1: T, param2: U) {
    return {
        ...param1,
        ...param2
    }
}

const myProfile = mergeObj2({name: 'Ihsan'}, {age: 18});
// console.log(myProfile.name);

// 4. Other implementation of Generic
// Find only class with length value
interface Lengthy {
    length: number
}

const x = <T extends Lengthy>(param1: T) => {
    if (param1.length === 1) {
        return 'You got no length'
    }
    return 'The length of ' + param1 + ' is ' + param1.length
}

const ihsan = x('Ihsan');
// console.log(ihsan)

// 5. keyof constraints
function describeObject<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

const ihsan2: string = describeObject({name: 'Ihsan'}, 'name');
console.log(ihsan2)