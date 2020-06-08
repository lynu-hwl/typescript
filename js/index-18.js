"use strict";
/**
 命名空间：
    在代码量较大的情况下，为了避免各种变量命名冲突，可将相似功能的函数、类、接口等放置到命名空间内
    同Java的包、Net的命名空间一样，Typescript的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。
    命名空间内的对象通过export向外暴露
命名空间和模块的区别：
    命名空间：内部模块，主要用于组织代码，避免命名冲突
    模块：ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间
 */
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.get = function () {
            console.log('小狗汪汪汪叫');
            return true;
        };
        return Dog;
    }());
    A.Dog = Dog;
})(A || (A = {}));
var dog1 = new A.Dog();
dog1.get();
