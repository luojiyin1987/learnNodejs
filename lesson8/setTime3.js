let p1 = new Promise((rsv, rej)=>{
    setTimeout(()=> {
        console.log('1');
        rsv('rsv')
    }, 0)
})

setImmediate(()=>{
    console.log('2');
})

p1.then( r=>{
    console.log('3');
})