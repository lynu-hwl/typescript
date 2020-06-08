"use strict";
//接口扩展：接口可以继承
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var W = /** @class */ (function (_super) {
    __extends(W, _super);
    function W(name) {
        return _super.call(this, name) || this;
    }
    W.prototype.eat = function (value) {
        console.log(this.name + "\u5728\u5403" + value);
    };
    return W;
}(Person));
var w = new W('小明');
w.eat('苹果');
