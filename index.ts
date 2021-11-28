// 1. Generic Types adalah sebuah type yang saling berkaitan dengan type lain.
const arr: Array<string> = ['Eko', 'Kurniawan', 'Khannedy'] // => string[];

const judi: Promise<string> = new Promise((resolve, reject) => {
 setTimeout(()=> {
    let rand = Math.random();
    
    if (rand > 0.5) {
        resolve('You are win the gambling')
    } else {
        reject('You are lose')
    }
 }, 700)
});

async function test() {
    try {
        const x = await judi;
        console.log(x.split(' '))
        // console.log(Math.trunc(x)) => Bakal error karena expected output nya adalah string
    } catch (error) {
        console.log(error)
    }
}

test()