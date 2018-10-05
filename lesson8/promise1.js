const p = new Promise((resolve, reject)=> {
    resolve(true)
})

p.then(r => {
    console.log(r);
    return new Promise((resolve, reject) => {
        resolve('2');
    });
})
    .then(r => {
        console.log(r);
    });

const p1 = Promise.resolve(true)

const p2 = Promise.resolve(false)

console.log(p);
console.log(p1);
console.log(p2);