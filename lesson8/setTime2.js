console.log(1);

let p1 =  new Promise((resolve, reject) => {
    console.log('2');
    setTimeout(() => {
        console.log('3');
        resolve('p1 rsv');
        console.log('4');
    }, 1000);
    console.log('5');
});

console.log('6');

p1.then(r => {
    console.log(7);
})

console.log('8');