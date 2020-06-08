"use strict";
/**
 * 把类作为参数的泛型类
 */
/**
 定义一个User类，这个类的作用就是映射数据库字段，
 然后定义一个 MysqlDB的类，这个类的作用是操作数据库，
 然后把User类作为参数传入到MysqlDB中
 */
/**
 普通写法
 class User{
    username:string|undefined;
    password:number|undefined;
  }

  class MysqlDB{
      add(user:User):boolean{
          console.log(user);
          return true;
      }
  }

  const u = new User();
  u.username = '张三';
  u.password = 18;

  const DB = new MysqlDB();
  DB.add(u)
 */
/**
 泛型类写法
 class MysqlDB<T>{
    add(t:T):boolean{
        console.log(t);
        return true;
    }
 }

 class User{
     username:string|undefined;
     password:number|undefined;
 }

 const u = new User();
 u.username = '张三';
 u.password = 18;
 const DB = new MysqlDB<User>();
 DB.add(u);
 */
var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
    }
    MysqlDB.prototype.add = function (t) {
        console.log(t);
        return true;
    };
    return MysqlDB;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var DB1 = new MysqlDB();
var u = new User();
u.username = '张三';
u.password = 18;
DB1.add(u);
var Dog = /** @class */ (function () {
    function Dog(params) {
        this.name = params.name;
        this.age = params.age;
        this.love = params.love;
    }
    return Dog;
}());
var dog = new Dog({ name: '旺财', age: 9, love: '骨头' });
var DB2 = new MysqlDB();
DB2.add(dog);
