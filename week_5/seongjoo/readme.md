# 유효범위

유효범위(Scope)는 변수의 수명을 의미.

```js
var vscope = 'global';
function fscope(){
    var vscope = 'local';
    console.log('함수안 '+vscope); // 함수안 local
}
fscope();
console.log('함수밖 '+vscope); // 함수밖 global
```

지연변수의 유효범위는 함수 안이고, 전역변수의 유효범위는 애플리케이션 전역.

같은 이름의 지역변수와 전역변수가 동시에 정의되어 있다면 지역변수가 우선함.

*변수 선언할때는 꼭 var을 붙이는 것을 습관화하여야하며, 전역변수를 사용해야 하는 경우라면 그것을 사용하는 이유를 명확히 알고 있을 때 사용해야함*

불가피하게 전역변수를 사용해야 하는 경우는 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하는 방법을 사용하지만 일반적인 방법으로는 익명함수를 호출하며 전역변수를 사용하지 않는다.

```js
(function(){
    var MYAPP = {}
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    console.log(sum()); // 30
}())
```

위와 같은 방법은 자바스크립트에서 로직을 모듈화하는 일반적인 방법

자바스크립트는 함수에 대한 유효범위만을 제공함<br>
많은 언어들이 블록(대체로 {,})에 대한 유효범위를 제공하는 것과 다른 점

```js
for(var i = 0; i < 1; i++){
    var name = 'coding everybody';
}
alert(name);  // coding everybody
```

*자바스크립트의 지역변수는 함수에서만 유효함*

```js
var i = 5;
 
function a(){
    var i = 10;
    b();
}
 
function b(){
    console.log(i);
}
 
a() // 5
```

자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다. 이러한 유효범위의 방식을 정적 유효범위(static scoping), 혹은 렉시컬(lexical scoping)이라고 함.

사용될 때가 아닌 정의될 때 지역변수가 사용되게 되서 결과가 5가 나오게 됨

# 값으로서의 함수와 콜백

자바스크립트에서는 함수도 객체이고 일종의 값이 됩니다.

객체의 속성 값으로 담겨진 함수를 메소드(method)라고함

함수는 값이기 때문에 다른 함수 인자로 전달 될 수 있음.

```js
function cal(func, num){
    return func(num)
}
function increase(num){
    return num+1
}
function decrease(num){
    return num-1
}
console.log(cal(increase, 1));  //  2
console.log(cal(decrease, 1));  //  0
```

함수는 함수의 리턴 값으로도 사용할 수 있음

```js
function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}
console.log(cal('plus')(2,1));  // 3
console.log(cal('minus')(2,1)); // 1 
```

배열의 값으로도 사용될 수 있음.

```js
var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},
    function(input){ return input / 2;}
];
var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}
console.log(input); //  60.5
```

콜백 : 어떠한 함수가 수신하는 인자

```js
function sortNumber(a,b){
    return a-b;
}
var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
console.log(numbers.sort(sortNumber));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20]
```

여기서 sortNumber는 콜백(callback) 함수가 되게됨

콜백은 비동기처리(Ajax)에서도 유용하게 사용됨.<br>
시간이 오래걸리는 작업이 있을 때 이 작업이 완료된 후에 처리해야 할일을 콜백으로 지정하면 해당 작업이 끝났을 때 미리 등록한 작업을 실행할 수 있음.

# 클로저 (closure)

클로저는 내부함수가 외부함수의 맥락(contect)에 접근할 수 있는 것을 가르킴

##### 내부함수

자바스크립트는 함수 안에서 또 다른 함수를 선언 가능함.

```js
function outter(){
    function inner(){
        var title = 'coding everybody'; 
        console.log(title); // coding everybody
    }
    inner();
}
outter();
```

내부함수는 외부함수의 지역변수에 접급할 수 있음.

```js
function outter(){
    var title = 'coding everybody';  
    function inner(){        
        console.log(title); // coding everybody
    }
    inner();
}
outter();
```

위의 예제는 내부함수 inner에서 title을 호출했을때 외부함수인 outter의 지역변수에 접근할 수 있음을 보여줌.

내부함수는 외부함수의 지역변수에 접근할 수 있는데 외부함수의 실행이 끝나서 외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근할 수 있음.<br>
이러한 메커니즘을 클로저라고 함.

```js
function outter(){
    var title = 'coding everybody';  
    return function(){        
        console.log(title); // coding everybody
    }
}
inner = outter();
inner();
```

*클로저란 내부함수가 외부함수의 지역변수에 접근할 수 있고 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미함*

```js
function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
console.log(ghost.get_title()); // Ghost in the shell
console.log(matrix.get_title());    // Matrix
 
ghost.set_title('공각기동대');
 
console.log(ghost.get_title()); // 공각기동대
console.log(matrix.get_title()); // Matrix
```

클로저의 응용으로 private variable이 가능.

private variable은 여기서는 factory_movie함수의 title임.

*Private 속성은 객체의 외부에서는 접근 할 수 없는 외부에 감춰진 속성이나 메소드를 의미함. 이를 통해서 객체의 내부에서만 사용해야 하는 값이 노출됨으로서 생길 수 있는 오류를 줄일 수 있음. 자바와 같은 언어에서는 이러한 틀성을 언어 문법 차원에서 지원하고 있음*

# arguments

함수에는 arguments라는 변수에 담긴 숨겨진 유사 배열이 있음. 이 배열에는 함수를 호출할 때 입력한 인자가 담겨 있음.

```js
function sum(){
    var _sum = 0;    
    for(var i = 0; i < arguments.length; i++){
        console.log(i+' : '+arguments[i]);
        _sum += arguments[i];
    }   
    return _sum;
}
console.log('result : ' + sum(1,2,3,4));
```

결과

0 : 1
1 : 2
2 : 3
3 : 4
result : 10

```js
function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
function one(arg1){
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
function two(arg1, arg2){
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}
zero(); // zero.length 0 arguments 0 
one('val1', 'val2');  // one.length 1 arguments 2 
two('val1');  // two.length 2 arguments 1
```

arguments.length는 함수로 전달된 실제 인자의 수를 의미하고, 함수.length는 함수에 정의된 인자의 수를 의미함.

참고링크 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments

# 함수의 호출


```js
function func(){
}
func();
```

함수를 호출하는 가장 기본적인 방법

```js
function sum(arg1, arg2){
    return arg1+arg2;
}
console.log(sum.apply(null, [1,2])) // 3
```

Function.apply와 Function.call로 함수를 호출 할 수 있음.

```js
o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum(){
    var _sum = 0;
    for(name in this){
        _sum += this[name];
    }
    return _sum;
}
console.log(sum.apply(o1)) // 6
console.log(sum.apply(o2)) // 185
```

# 객체지향 프로그래밍

객체지향 프로그래밍(Object-Oriented Programming)은 로직을 상태(state)와 행위(behave)로 이루어진 객체로 만드는 것. 

*객체는 변수와 메소드를 그룹핑한 것*

설계 => 소프트웨어의 추상화

객체 지향은 부품화의 정점이라고 할 수 있음

*연관된 메소드와 그 메소드가 사용하는 변수들을 분류하고 그룹핑하는 것*

정보의 은닉화 (Information Hiding), 캡슐화(Encapsulation) : 내부의 동작 방법을 단단한 케이스 안에 숨기고 사용자에게는 그 부품의 사용방법만을 노출하고 있는 것. 사용자에게는 그 부품을 사용하는 방법이 중요한 것이 됨.

인터페이스란 이질적인 것들이 결합하는 것을 막하주는 역할. 부품들 간의 약속

# 생성자와 new

객체란 서로 연관된 변수와 함수를 그룹핑한 그릇이라고 할 수 있음. 객체 내의 변수를 프로퍼티(property) 함수를 메소드(method)라고 부름

Javascript - Prototype-based Programming

```js
var person = {}
person.name = 'egoing';
person.introduce = function(){
    return 'My name is '+this.name;
}
console.log(person.introduce());    // My name is egoing
```

```js
var person = {
    'name' : 'egoing',
    'introduce' : function(){
        return 'My name is '+this.name;
    }
}
console.log(person.introduce());    //  My name is egoing
```

생성자(constructor)는 객체를 만드는 역할을 하는 함수. 자바스크립트에서 함수는 객체를 만드는 창조자라고 할 수 있음.

함수에 new를 붙이는 것을 통해서 객체를 만들 수 있음.

```js
function Person(){}
var p = new Person();
p.name = 'egoing';
p.introduce = function(){
    return 'My name is '+this.name; 
}
console.log(p.introduce()); //  My name is egoing
```

```js
function Person(){}
var p1 = new Person();
p1.name = 'egoing';
p1.introduce = function(){
    return 'My name is '+this.name; 
}
console.log(p1.introduce());    // My name is egoing
 
var p2 = new Person();
p2.name = 'leezche';
p2.introduce = function(){
    return 'My name is '+this.name; 
}
console.log(p2.introduce());    // My name is leezche
```

```js
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
}
var p1 = new Person('egoing');  // My name is egoing
console.log(p1.introduce());
 
var p2 = new Person('leezche'); // My name is leezche
console.log(p2.introduce());
```

객체에 대한 초기화(init)를 통해서 코드의 재활용성을 높임.

