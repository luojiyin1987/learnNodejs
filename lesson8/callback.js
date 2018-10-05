let p = new Promise((resolve, reject) => {
    resolve(1)
})

let p2 = p.then(r => {
    console.log(r);
    return new Promise((rl, rj) => {
        rl(2)
    })
})

let p3 = p2.then(r => {
    console.log(r);
})