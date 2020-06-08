//接口扩展：接口可以继承

//1.类只实现接口
// interface World{
//     eat():void
// }

// interface Person extends World{
//     render():void
// }

// class H implements Person{
//     public value:string;
//     constructor(value:string){
//         this.value = value;
//     }

//     eat(){
//         console.log(`吃${this.value}`);
//     }

//     render(){
//         console.log(`返回${this.value}`);
//     }
// }

// const h = new H('苹果');
// h.eat()
// h.render()

//2.类不仅实现接口还继承类
interface World{
    eat(value:string):void
}

class Person{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
}

class W extends Person implements World{
    constructor(name:string){
        super(name);
    }

    eat(value:string){
        console.log(`${this.name}在吃${value}`);
    }
}

const w = new W('小明');
w.eat('苹果');



