# this

this는 함수 내에서 함수 호출 맥락(context)를 의미함.

함수를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라짐.

```js
function func(){
    if(window === this){
        console.log("window === this");
    }
}
func();

/*  result :
*   window === this
* */
```

객체의 소속인 메소드의 this는 그 객체를 가르킴

```js
var o = {
    func : function(){
        if(o === this){
            console.log("o === this");
        }
    }
}
o.func();   

/*  result :
*   o === this
* */
```

```js
var funcThis = null; 
 
function Func(){
    funcThis = this;
}
var o1 = Func();
if(funcThis === window){
    console.log('window');
}
 
var o2 = new Func();
if(funcThis === o2){
    console.log('o2');
}

/*  result :
*   window
*   o2
* */
```

생성자는 빈 객체를 만듬. 그리고 이 객체내에서 this는 만들어진 객체를 가르킴.

생성자가 실행되기 전까지는 객체는 변수에 할당될 수 없기 때문에 this가 아니면 객체에 대한 어떠한 작업을 할 수 없기 때문임. 

즉, 함수의 this는 window이며 생성자를 호출하면 생성자의 this는 생성자의 객체가 됨

```js
var o = {}
var p = {}
function func(){
    switch(this){
        case o:
            console.log('o');
            break;
        case p:
            console.log('p');
            break;
        case window:
            console.log('window');
            break;          
    }
}
func();
func.apply(o);
func.apply(p);

/*  result :
*   windows
*   o
*   p
* */
```

함수의 메소드인 apply, call을 이용하면 this의 값을 제어 가능함.

# 상속

상속은 객체의 로직을 그대로 물려 받는 또 다른 객체를 만들 수 있는 기능을 의미함. <br>
기존의 로직을 수정하고 변경해서 파생된 새로운 객체를 만들 수 있게 해줌

```js
function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
 
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
 
var p1 = new Programmer('egoing');
console.log(p1.introduce());

/*  result :
*   My name is egoing
* */
```

Programmer라는 생성자를 만들고 prototype과 Person의 객체를 연결하였더니 Programmer 객체도 메소드 introduce를 사용할 수 있게 됨.

Programmer가 Person의 기능을 상속하고 있음.

```js
function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
 
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    return "hello world";
}
 
var p1 = new Programmer('egoing');
console.log(p1.introduce());
console.log(p1.coding());

/*  result :
*   My name is egoing
*   hello world
* */
```

# prototype

prototype : 객체의 원형

prototype에 저장된 속성들은 생성자를 통해서 만들어질 때 그 객체에 연결됨

```js
function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
Super.prototype = new Ultra();
 
function Sub(){}
Sub.prototype = new Super();
 
var o = new Sub();
console.log(o.ultraProp);   // true
```

생성자 Sub를 통해서 만들어진 객체 o가 Ultra의 프로퍼티 ultraProp에 접근 가능한 것은 prototype 체인으로 Sub와 Ultra가 연결되어 있기 때문임.

1. 객체 o에서 ultraProp를 찾음
2. 없다면 Sub.prototype.ultraProp를 찾음
3. 없다면 Super.prototype.ultraProp를 찾음
4. 없다면 Ultra.prototype.ultraProp를 찾음

prototype은 객체와 객체를 연결하는 체인의 역할을 하게됨. 이러한 관계를 prototype chain이라고 함

https://github.com/seongjoojin/learning_JS-_Flow/tree/master/06-prototype

# 표준 내장 객체의 확장

표준 내장 객체(Standard Built-in Object)는 자바스크립트가 기본적으로 가지고 있는 객체들을 의미함.<br>
내장 객체가 중요한 이유는 프로그래밍을 하는데 기본적으로 필요한 도구들이기 때문임.

자바스크립트 내장 객체

- Object
- Function
- Array
- String
- Boolean
- Math
- Date
- RegExp

```js
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
function getRandomValueFromArray(haystack){
    var index = Math.floor(haystack.length*Math.random());
    return haystack[index]; 
}
console.log(getRandomValueFromArray(arr));
```

배열에서 특정한 값을 랜덤하게 추출하는 코드.

```js
Array.prototype.rand = function(){
    var index = Math.floor(this.length*Math.random());
    return this[index];
}
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
console.log(arr.rand());
```