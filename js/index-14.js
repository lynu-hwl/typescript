"use strict";
/**
 * 泛型接口
 */
var fn = function (value) {
    return value;
};
console.log(fn(20));
function getData(value) {
    return value;
}
var tn = getData;
console.log(tn(123));
