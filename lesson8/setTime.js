console.log(1);

let p1 = new Promise((resolve, reject) => {
    console.log('2');
    setTimeout(() => {
        console.log('3');
        resolve('p1 rsv');
    }, 1000);
});

let p2 = new Promise((rsv, rej) => {
    setTimeout(() => {
        console.log('4');
        rsv('p2 rsv')
    }, 500);
})

console.log('5');

p1.then(r => {
    console.log(6);
});

p2.then(r => {
    console.log(7);
});