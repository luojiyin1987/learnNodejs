const promise = new Promise((resolve, reject) => {
    resolve('1');
});

promise
    .then(r => {
        console.log(r);
        return new Promise((resolve, reject) => {
            reject('err');
        });
    })
    .then(r => {
        console.log(r);
        return new Promise((rsv, rej) => {
            console.log('p2 execed');
            rej('rejected');
        });
    }, (err) => {
        console.log('p2 caught err');
        console.log(err);
        return Promise.reject('err')
    })
    .catch(e => {
        console.log('p3 caugt err');
        console.log(e);
    });