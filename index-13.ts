 /*
 泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。
 组件不仅能够支持当前的数据类型，同时也能够支持未来的数据类型。这在创建大型系统时为你提供了十分灵活的功能。

 在像C#和JAVA中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。这样用户就可以以自己的数据类型来使用组件。

 通俗的讲：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持
  */

  /**接收任意类型参数，返回任意类型值，但这种方式就失去了对类型的检查 */
  function a(value:any):any{
      return value;
  }

  console.log(a(123));
  console.log(a('123'));

  /**泛型函数 */
  function b<T>(value:T):T{
      return value;
  }
  console.log(b<Number>(123));
  console.log(b<String>('123'));

  /**泛型类，比如有个最小堆算法，需要同时支持返回数字和字符串两种类型 */
  class MinClass<T>{
    constructor(list:T[]){
        this.list = list;
    }
    public list:T[];
    
    min():T{
        let min=this.list[0];
        this.list.forEach((item)=>{
            if(item<min){
                min=item;
            }
        })
        return min;
    }
  }

  const TT1 = new MinClass([7,3,35,12,5,1]);
  console.log(TT1.min());
  const TT2 = new MinClass(['s','f','l','b','k']);
  console.log(TT2.min());
   

   

  