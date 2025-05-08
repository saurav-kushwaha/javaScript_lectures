// call stack
function one(){
    console.log('one');
    two();
}
function two(){
    console.log('two');
    three();
}
function three(){
    console.log('three');
    
}
one();
two();
three();
// in first call stack, one() is called, then two() is called, then three() is called.
// in second call stack, two() is called, then three() is called.
// in third call stack, three() is called.
