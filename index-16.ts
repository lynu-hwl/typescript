/**
 功能：定义一个操作数据库的库 支持 Mysql Mssql MongoDB
 要求1:Mysql Mssql MongoDB 都有 add update dalete get方法
 注意：约束统一的规范，以及代码复用
 解决方案：需要约束规范所以要定义接口，需要代码重用所以用到泛型
    1.接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范
    2.泛型 通俗的讲：泛型就是解决 类 接口 方法的复用性
 */
interface DBI<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}

