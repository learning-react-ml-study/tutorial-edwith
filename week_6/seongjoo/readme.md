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

http://www.nextree.co.kr/p7323/

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

# Object

Object 객체는 객체의 가장 기본적인 형태를 가진 객체.<br>
아무것도 상속받지 않는 순수한 객체임.<br>
자바스크립트에서는 값을 저장하는 기본적인 단위로 Object를 사용함.

모든 객체는 Object 객체의 프로퍼티를 가지고 있음. (자바스크립트의 모든 객체는 Object 객체를 상속받음)

Object 객체를 확장하면 모든 객체가 접근할 수 있는 API를 만들 수 있음.

```js
Object.prototype.contain = function(neddle) {
    for(var name in this){
        if(this[name] === neddle){
            return true;
        }
    }
    return false;
}
var o = {'name':'egoing', 'city':'seoul'}
console.log(o.contain('egoing'));   // true
var a = ['egoing','leezche','grapittie'];
console.log(a.contain('leezche'));  // true
```
contain 참고 - https://www.w3schools.com/jsref/jsref_includes.asp

Object객체는 확장하지 않는 것이 바람직함. 왜냐하면 모든 객체에 영향을 주기 때문임.

# 데이터타입

데이터 타입 : 데이터의 형태

데이터 타입은 두가지로 구분됨 (객체/객체가 아닌 것)

객체가 아닌 것 - 원시 데이터 타입(primitive type)

- 숫자
- 문자열
- 불리언(true/false)
- null
- undefined

```js
var str = 'coding';
console.log(str.length);    // 6
console.log(str.charAt(0));     // c
```

내부적으로 문자열이 원시 데이터 타입이고 문자열과 관련된 어떤 작업을 하려고 할 때 자바스크립트는 임시로 문자열 객체를 만들고 사용이 끝나면 제거하기 때문에 문자열은 객체가 아니게 됨.<br>이러한 처리는 내부적으로 일어남

```js
var str = 'coding';
str.prop = 'everybody';
console.log(str.prop);  // undefined
```

st.prop를 하는 순간에 자바스크립 내부적으로 String 객체가 만들어짐.<br>
prop 프로퍼티는 이 객체에 저장되고 이 객체는 곧 제거됨<br>
그렇기 때문에 prop라는 속성이 저장된 객체는 존재하지 않게됨

문자열과 관련해서 필요한 기능성을 객체지향적으로 제공하는 필요 또한 있기 때문에 원시 데이터형을 객체처럼 다룰 수 있도록 하기 위한 객체를 자바스크립트는 제공하고 있는데 그것이 레퍼객체(wrapper object)임.

레퍼객체로는 String, Number, Boolean이 있음. null과 undefined는 레퍼 객체가 존재하지 않음.

# 참조

```js
var a = {'id':1};
var b = a;
b.id = 2;
console.log(a.id);  // 2
```

변수에 담겨있는 데이터가 원시형이면 그 안에는 실제 데이터가 들어있고, 객체면 변수 안에는 데이터에 대한 참조 방법이 들어있다고 할 수 있음.

```js
var a = 1;
function func(b){
    b = 2;
}
func(a);
console.log(a); // 1
```

원시 데이터 타입을 인자로 넘겼을 때의 동작

```js
var a = {'id':1};
function func(b){
    b = {'id':2};
}
func(a);
console.log(a.id);  // 1
```

참조 데이터 타입을 인자로 넘겼을 때의 동작

함수 func의 파라미터 b로 전달된 값은 객체 b임. <br>
(b = a) b를 새로운 객체로 대체하는 것은 (b = {'id':2}) b가 가르키는 객체를 변경하는 것이기 때문에 객체 a에 영향을 주지 않음.

```js
var a = {'id':1};
function func(b){
    b.id = 2;
}
func(a);
console.log(a.id); // 2
```

파라미터 b는 객체 a의 레퍼런스임 <br>
이 값의 속성을 바꾸면 그 속성이 소속된 객체를 대상으로 수정작업을 한 것이 되기 때문에 b의 변경은 a에도 영향을 미치게 됨.

# 수업을 마치며

책 추천

- 자바스크립트 완벽 가이드 6판 (데이비드 플래너건) : 자바스크립트의 거의 모든 것
- 자바스크립트 핵심가이드 (더글라스 크락포드) : 자바스크립트에서 좋은 점과 나쁜 점을 구분해서 좋은 점만 사용하도록 유도하고 있는 책
- 자바스크립트 닌자 비급 (존레식, 베어 바이볼트) : 자바스크립트에 대해서 메너리즘을 느끼기 시작하는 중급자에게는 정체감을 뛰어넘게 하는 다양한 기법과 좋은 사례들이 소개
- 자바스크립트를 깨우치다 (코디 린들리) : 자바스크립트의 고급 개념들을 비교적 쉬운 예제를 통해서 소개
- 자바스크립트 재진입하기 ( https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript ) : 파이어폭스를 만든 모질라 재단에서 제공하는 자바스크립트 학습자료