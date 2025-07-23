function badFunction(a,a,b){
    console.log(a);
    return a+a+b;
}
console.log(badFunction(10,4,2));

function badFunction2(a,b,a,a){
    console.log(a);
    return a+b+a;
}
console.log(badFunction2(10,2,4,5));