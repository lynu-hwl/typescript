/**
 * 泛型接口
 */

 //1
interface Fn{
    <T>(value:T):T
}

const fn:Fn=function<T>(value:T):T{
    return value;
};

console.log(fn<number>(20));


//2
interface Tn<T>{
    (value:T):T
}

function getData<T>(value:T):T{
    return value;
}

const tn:Tn<number>=getData;

console.log(tn(123));
 