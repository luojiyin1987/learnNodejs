function foo(params, callback)
{
    if(!params) callback(new Error('INVALID PARAMS'));
    else callback(null, 'Great!');
}

foo ({}, (err, result) => {
    if(err)  console.log(err);
    if(result) console.log(result);
})