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