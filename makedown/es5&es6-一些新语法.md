###  ES6的新语法  ### 
**1.变量**  

	let	声明一个块级作用域的变量  
	const 声明一个常量（定义以后不能被修改） 
 
**1.1 let块级作用域**

	var sum=0;
	for(let i=1; i<=10; i++){
		sum+=i;
	}
	console.log(sum);
	console.log(i); //块级作用域没有全局的i，会报错

1.2 const定义常量

	const a=10;
	var b=a*2; //常量可以正常使用
	//a=12;  //常量不能被修改，是只读的。
	console.log(a,b);



**2.函数**  

2.1 => 箭头函数

ES5的回调函数写法

	setTimeout(function(){
		console.log('hello world');
	},1000);

ES6的回调函数写法

	setTimeout(()=>{
		console.log('hello world222222');
	},2000);

### 3.类的定义 ###

3.1ES5 定义构造函数	

    function Person(name,age){		
        this.name=name;
        this.age=age;
		}
		//定义成员方法
		Person.prototype.showName=function(){
			console.log(this.name);
		}
		//定义静态方法
		Person.showVer=function(){
			console.log('V1.1.1');
		}

3.2 ES6定义类

	class Person{
		//定义构造函数
		constructor(name,age){
			this.name=name;
			this.age=age;
		}
		
		//定义成员方法
		showName(){
			console.log(this.name);
		}
		
		//定义静态方法
		static showVer(){
			console.log('V2.1.1');
		}
	}
实例化

	var p1=new Person('张三',18);
	console.log(p1);
	Person.showVer(); //调用静态方法

			
### 4.类的继承 ###

4.1 ES5的继承

	function Father(name,age){
		this.name=name;
		this.age=age;
	}
	Father.prototype.showName=function(){
		console.log(this.name);
	}
	
	//子类
	function Son(name,age,gender){
		this.gender=gender;
		//1：让子类具有父类的所有属性，在这里借用父类的构造函数
		Father.apply(this, arguments);
	}
	//2：让子类的原型成为父类原型的对象
	Son.prototype=Object.create(Father.prototype);
	//3：找回丢失的构造函数
	Son.prototype.constructor=Son;
	
	Son.prototype.study=function(){
		//...
	}
			
4.2 ES6的继承

	class Father{
		constructor(name,age){
			this.name=name;
			this.age=age;
		}
		
		showName(){
			console.log('姓名是：'+this.name);
		}
	}
	
	//定义子类
	class Son extends Father{
		constructor(name,age,gender){
			super(name,age); //只能写在this之前，调用父类的构造函数
			this.gender=gender;
		}
	}









