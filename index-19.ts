/**
 装饰器：装饰器是一种类型的声明，它能够附加到类声明、方法、属性或参数上，可以修改类的行为

 通俗的讲修饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、方法、属性、参数的功能

 常见的修饰器有：类修饰器、属性修饰器、方法修饰器、参数修饰器

 修饰器的写法：普通修饰器（无法传参），装饰器工厂（可传参）

 装饰器是过去几年中js最大的成绩之一，已是Es7的标准特性之一
 */

 //1.类装饰器：类装饰器在类声明之前被类声明（紧接着类声明），类装饰器应用于类构造函数，可以用来监视、修改、替换类定义

 //1.1 普通类装饰器
// function logClass(params:any){
//     console.log(params);

//     //params 就是当前类
//     params.prototype.apiUrl = 'www.baidu.com';
//     params.prototype.run = function(){
//         console.log('我是run方法');
//     }
// }

//  @logClass
//  class HttpClient{
//     constructor(){

//     }
//     getData(){
        
//     }
//  }

//  const http:any = new HttpClient();
//  console.log(http.apiUrl);
//  http.run();

 //1.2 装饰器工厂
//  function logClass(params:any){
//     console.log(params);
//     //params 是传入参数
//     return function(target:any){
//         //target 是被装饰类
//         target.prototype.apiUrl = 'www.baidu.com';
//         target.prototype.run = function(){
//             console.log('我是run方法');
//         }
//     }
// }

//  @logClass(123)
//  class HttpClient{
//     constructor(){

//     }
//     getData(){
        
//     }
//  }

//  const http:any = new HttpClient();
//  console.log(http.apiUrl);
//  http.run();

//1.类装饰器
//    下面是一个重载构造函数的例子
//    类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数
//    如果类装饰器返回一个值，它会使用提供的构造函数类替换类的声明

// function logClass(target:any){
//     console.log(target);
//     return class extends target{
//         apiUrl:any='我是修改后的数据';
//         getData(){
//             console.log(this.apiUrl);
//         }
//     }
// }

// @logClass
// class HttpClient{
//     public apiUrl:string | undefined;
//     constructor(){
//         this.apiUrl = '我是构造函数里面的apiUrl';
//     }
//     getData(){
//         console.log(this.apiUrl);
//     }
// }
// const http = new HttpClient();
// http.getData();

/**
 * 2.属性装饰器
 * 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
 *     1.对于静态成员来说是类的构造函数，对于实例成员是原型对象
 *     2.成员的名字
 */

//  function logProperty(params:any){
//      return function(target:any,attr:any){
//          console.log(target);
//          console.log(attr);
//          target.attr = params;
//      }
//  }

//  class HttpClient{
//     @logProperty('我是修改后的apiUrl')
//     public apiUrl:string | undefined;
//     constructor(){
//         this.apiUrl = '我是构造函数里面的apiUrl';
//     }
//     getData(){
//         console.log(this.apiUrl);
//     }
//  }

//  const http = new HttpClient();
//  http.getData();

/**
 * 3.方法装饰器
 *   它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义
 *    
 *   方法装饰会在运行时传入下列3个参数
 *      1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *      2.成员的名字
 *      3.成员的属性描述
 */
// function logMethod(params:any){
//     return function(target:any,methodName:any,desc:any){
//         console.log(target);
//         console.log(methodName);
//         console.log(desc);

//         target.apiUrl = 'xxx';
//         target.run = function(){
//             console.log('run函数');
//         }

//         //修改装饰器的方法 把装饰器方法里面传入的所有参数改为string类型
//         //1.保存原有的方法
//         const oMethod = desc.value;
//         desc.value = function(...args:any[]){
//             args = args.map((value)=>{
//                 return String(value);
//             })
//             oMethod.apply(this,args);
//         }
//     }
// }

//  class HttpClient{
//     public apiUrl:string | undefined;
//     constructor(){
//         this.apiUrl = '我是构造函数里面的apiUrl';
//     }
//     @logMethod('www.baidu.com')
//     getData(...args:any[]){
//         console.log(args);
//         console.log('我是getData里面的方法');
//     }
//  }

//  const http:any = new HttpClient();
// //  console.log(http.apiUrl);
// //  http.run();
// http.getData([123,456])
 
/**
 * 4.方法参数装饰器
 *       参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入3个参数
 *          1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *          2.方法的名字
 *          3.参数在函数参数列表中的索引
 */
//   function logParams(params:any){
//     return function(target:any,methodName:string,index:number){
//         console.log(methodName);
//         console.log(index);
//         target.index = index;
//     }
//   }

//   class HttpClient{
//     public apiUrl:string | undefined;
//     constructor(){
//         this.apiUrl = '我是构造函数里面的apiUrl';
//     }
//     getData(age:number,@logParams('id') id:string){
//         console.log('我是getData里面的方法');
//     }
//  }
//  const http:any = new HttpClient();
//  http.getData(18,'123');
//  console.log(http.index);

/*
装饰器执行顺序：
属性装饰器=》方法装饰器=》方法参数装饰器=》类装饰器
有多个同类装饰器，先执行后面的
*/ 
 

