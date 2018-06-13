# javascript 배열과 객체 

## 배열의 정의 
배열은 CS에서 자주 사용하느 자료구조 중 하나이다. 정수 인덱스를 이용해 각 요소에 접근할 수 있게 순차적으로 요소를 저장한 집합체라고 할 수 있다. 모든 프로그래밍 언어에서 배열을 지원하고 사용한다. 하지만 자바스크립트는 다른 언어들과는 약간 다른 차이점을 가지고 있다. 

자바스크립트에서 배열은 객체의 한 종류이며 정수 인덱스(객체의 속성 역할)로 객체 내 데이터를 표현한다. 엄밀히 말해 배열은 자바스크립트 객체지만 내부적으로는 특화된 객체이므로 배열로 취급한다. 물론 미리 정의된 속성과 메서드를 이용할 수 있다. 

## 배열 사용하기 
JS에서 배열을 사용하는 법은 매우 유연하다 간단히 []를 이용햐 만드는 법이 가장 간단하다. 
```javascript
var numbers = [];
``` 
이 상태에서는 길이가 0인 배열이 선언된다. length 속성을 이용해 배열의 길이를 확인 할 수 있다. 
```javascript
numbers.length // 0;
```
한 배열이 다양한 데이터 타입의 요소들을 포함 할 수 있다. 
```javascript
var arr = [1, 2, 'str', null];
```
isArray() 라는 메서드를 이용하여 배열인지 확인 가능하다 
```javascript
var numbers = 3;
var arr = [1, 2, 3];
isArray(numbers) // false;
isArray(arr) // true;
```
## 배열 요소 접근하고 고치기 
```javascript
var nums = [];
for(var i = 0; i < 100; i++) {
    num[i] = i + 1;
}  // 반복문을 사용해 1부터 100까지 숫자를 배열에 할당하는 기본적인 방법이다.
```
```javascript
var nums = [1, 2, 3, 4, 5];
nums[1] + nums[2] + nums[3] // 2 + 3 + 4; 배열의 index 시작은 0부터 
// 9;
```
## 문자열로 배열 만들기
문자열에 split() 메서드를 이용하면 배열이 만들어진다. 특정 구분자로 분리한 다음 분리된 문자열을 포함하는 배열을 생성
```javascript
var str = 'hello world'
str.split('') // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
str.split(' ') // ["hello", "world"]
```

## 주요 메서드
> 같이 코드 보면서 해여..^^

### [MDN 사이트 참조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## 객체의 정의 

객체는 이름-값 쌍으로 저장되는 원시 데이터(때때로 참조 데이터 타입)의 순서 없는 목록이다. 목록의 각 항목은 프로퍼티라고 불리며(함수는 메서드로 불린다), 각 프로퍼티의 이름은 유일해야 하고, 하나의 문자열 또는 숫자가 될 수 있다. 객체는 이름과 값이 있는 속성들을 포함하는 하나의 컨테이너라고 할 수 있다. 속성의 이름은 문자열이면 가능하며, 빈 문자열도 가능하다. 속성의 값은 `undefined`를 제외한 모든 값이 사용 될 수 있다.
> 간단한 객체 
```javascript
var me = {
    name: 'lee',
    age: 'secret',
    hobby: 'music',
    home: null
}
```

### 프로퍼티 
ECMA5에서 프로퍼티는 객체의 일부로 이름과 값 사이 연결을 의미 라고 정의 한다. 한마디로 프로퍼티는 객체의 속성을 나타내는 접근 가능한 이름과 활용 가능한 값을 가지는 특별한 형태이다. 그 객체가 가진 정보에 직접적으로 접근할 수 있게 해주기 때문에 매우 유용한 정보이다. 결론은 프로퍼티란 기본적으로 이름과 값을 가지고 객체의 정보를 담고 있는 데이터라고 할 수 있다. 
```javascript
var foo = {}; // foo 객체 생성
foo.a = 1; // a 라는 프로퍼티를 생성하고 1이라는 값을 할당.
var sum = foo.a + 10; // a 프로퍼티에 접근 한 후 다른 연산이 가능하다. 
console.log(sum) // 11;
```
### 메서드
메서드는 객체가 가지고 있는 동작이라고 할 수 있다. 일련의 동작을 실행 함에 있어서 함수와 메서드는 같다고 할 수 있지만 엄연히 다르다. 메서드를 수행 하기 위해서는 객체를 통해 해당 메서드를 수행하여야 한다. 그 동작 자체를 수행 하는 것은 객체이며 객체에게 그 동작을 수행 하라고 지시 해야 한다. 하지만 함수는 객체에게 실행을 지시 할 필요가 없다. 함수 그 자체가 독립된 `_일급객체_`이기 때문이다. 
```javascript
var foo ={};
foo.a = 1;
foo.b = 2;
foo,sum = function(){
    console.log(foo.a + foo.b);
}
foo.sum() // 3;
``` 


## 자바스크립트의 객체 구성
> 자바스크립트의 객체는 크게 3가지로 나누어져 있다. 1.built-in-object, 2. Native-object, 3. Host-object

1. Built-in-Object(자바스크립트 내장객체)
    - `-Global Object, String, Number, Boolean, Date, Array, Math, RegExp, Error_` 등 많은 내장객체들이 있는데 자바스크립트 엔진이 구동되는 시점에서 바로 제공되며 바로 사용이 가능하다. 

2. Native-Object(브라우저 내장객체)
    - 역시 자바스크립트 엔진이 구동되는 시점에서 바로 제공된다. 하짐나 내장객체와 다른 점은 브라우저에서 작동하는 시점에서 제공 된다는 점이다. 브라우저 객체 모델(BOM), 문서 객체 모델(DOM), Window-Object 등이 이에 속한다. 이 객체들은 내장객체들이 구성 된 후에 구성된다. 따로 내장객체와 분리하는 경우는 결국 브라우저 마다 브라우저 내장객체를 사용하는 구성이 조금 씩 틀리기 때문이다. 

3. Host-Object(사용자 정의 객체)
    - 말 그대로 사용자가 생성한 객체들이다. 생성자 혹은 리터럴로 사용자가 객체를 정의하고 확장시킨 객체이므로 위의 두가지 객체들이 생성 된 후에 생성된다. 

## 객체 생성

> 객체를 생성하는 방법은 크게 2가지가 있다. 하나는 생성자 함수를 이용한 방법과 객체 리터럴를 이용하는 방식이다. 

```javascript
// 생성자 방식
var foo = new Object(); 
foo.name = 'lee-chang-ho'
console.log(foo.name) // 'lee-chang-ho'
// 객체 리터럴 방식
var boo = {
    name: 'chang-ho'
}
console.log(boo.name) // 'chang-ho'
```

[Insanehong님 블로그 참조](http://insanehong.kr/post/javascript-object/)