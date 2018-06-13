# 호이스팅
오늘 스터디에서 갑자기 토론 할 거리가 튀어 나왔다. 바로 호이스팅에 관한 내용 이였다. 이 부분에 관해선 사실 이제  ES6에 관한 스펙을 많이 사용하고 let과 const를 대부분 사용하기 때문에 걱정을 하지 않던 부분 이였지만 나 자신도 이 문제에 관해선 겉핡기 식으로만 알고 있는 것 같아 이번 기회를 이용하여 정리를 해 보려고 한다. 

# 호이스팅의 개념
호이스팅의 개념을 일단 영문으로 정리하면 아래와 같다. 
> Hoisting is the javascript interpreter's action of moving all variable and function declarations to the top of the current scope, regardless of where they are defined.

위의 글을 해석하면 다음과 같다. 호이스팅은 자바스크립트 인터프리터의 동작으로 인하여 모든 변수와 함수선언이 변수와 함수가 어디에 정의되어 있던 현재 유효범위(scope)의 최상단으로 이동한다는 뜻이다.
이로 인해서 자바스크립트에서는 함수에서 사용하는 모든 변수를 함수 첫 부분에서 선언하는 것이 최선의 방법이라고 많은 책 등에 기술되어 있다(javascript the good part). 

# 함수의 호이스팅 
함수 선언문으로 정의된 함수들은 자동적으로 호이스팅 된다. 즉, 정의 되기 전에 함수 호출이 가능하다는 뜻이다. 예를 들어 아래와 같은 코드가 있다고 가정하자 
```javascript
// 선언하기 전에 미리 호출
hoist();
// 많은 코드들
// 많은 코드들
// 많은 코드들
// 코드 끝에 가서야 함수를 선언
function hoist() {
    console.log('Hoist me');
}
```
사용하기 전에 모든 함수들을 정의 하는 것 보다 코드 끝 부분에 모든 함수들을 한꺼번에 모아 둘 수 있기 때문에 어떻게 보면 꽤 유용할 수 있다. 

#  변수의 호이스팅
`var` 를 이용하여 선언한 변수 선언은 자동적으로 현재 스코프의 최상단으로 이동한다. 하지만 변수 할당은 호이스팅 되지 않는다. 즉, 변수의 할당이 함수의 끝부분이라면 변수는 존재 하지만 할당이 이루어질 때 까지 `undefined` 값이 나온다. 

```javascript
console.log(name) // 변수 할당이 끝날 떄 까진 undefined

var name = 'me';

console.log(name); // me
```
변수 호이스팅은 꽤 어렵고 혼동이 가는 개념이다. 게다가 변수를 선언하는 것을 `var`에 만 의존하기 때문에 더 그렇다. 하지만 ES6에서는 `const`, `let`이라는 키워드가 나옴으로 인하여 이러한 어려움이 사라지고 error 메시지를 던짐으로 인해 더 코드를 쉽게 작성 할 수 있게 되었다. 

함수 표현식(익명함수가 변수에 할당되는)은 변수의 호이스팅과 비슷하게 작동한다. 그러므로 만약 `var`를 이용하여 함수를 정의했다면 호이스팅 될 것이고 실제 함수가 아닐 것이다. 이건 실제 코드로 선언 되기 까진 호출 될수 없다는 뜻이다. 
```javascript
invoke() // error 발생
invoke2() // return hello

// 함수 표현식
var invoke = function () {
    return `hello`
}

// 함수 선언
function invoke2 () {
    return `hello`
}

invoke() // return hello
```
이게 중요한 함수 정의 방법 간의 중요한 차이다. 그리고 아마 어떤 방법을 사용하냐에 따라 사용자에게 영향을 끼칠 수 있고 제이쿼리를 만든 더글라스 크락포드는 자바스크립트 핵심가이드라는 책에서 함수 표현식을 사용하라고 권장하고 있다. 

# 추가예제 코드 

```javascript
(function(){
    var foo = 1;
    var boo = 2;
    var baz = 3;
    console.log(foo, ' ' , boo, ' ' , baz, ' ' );
})();  // 1, 2, 3 
``` 
```javascript
(function(){
    var foo = 1;
    console.log(foo, ' ' , boo, ' ' , baz, ' ' );
    var boo = 2;
    var baz = 3;
})();  // 1, undefined, undefined 
``` 
위의 코드를 하나씩 해석해 보면 아래와 같다. 
```javascript
(function(){
    var foo;
    var boo;
    var baz;
    foo = 1
    console.log(foo, ' ' , boo, ' ' , baz, ' ' );
    boo = 2;
    baz = 3;
})();  // 
```



