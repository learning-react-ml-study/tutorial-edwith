# this
- 함수가 어떻게 실행되는지를 결정
- 특정 컨텍스트에서 특별한 의미를 지니게 되는 keyword

# this가 가리키는 내용

## 전역 객체
```javascript
console.log(this) // window
```
```javascript
// 글로벌 객체 
console.log(this);

var teacher = 'teacher';
console.log(window.teacher === teacher) // true

function whatIsthis() {
    console.log(this);
}
whatIsthis() // window

function person() {
    this.person = 'colt';
	console.log(this); // window 객체
}
person() // colt 
```
person 함수 내부에서 this가 전역객체를 가리키기 때문에 `person` 변수를 전역스코프로 참조가 가능하게 된 것. 

## Object 

```javascript
// Obejct binding
var manObj = {
    firstName: 'lee',
    lastName: 'changhao',
    sayHi: function() {
        console.log(`hi ${this.lastName}`)  // this는 부모 객체를 가르킨다
    },
    determine: function() {
        console.log(this === manObj)
        return this === manObj;
    }
}

manObj.sayHi()  // hi changhao
manObj.determine() // true
```
- 객체 내부 메소드 안에서의 this는 선언된 부모객체를 가르킨다. (실행될때 정의된다) 
- 가장 가까운 부모 객체를 가르킴

```javascript
// 연습문제 
var person = {
    firstName: 'kim',
    determine: this;
}
// this는 무엇을 가르킬까?
// 함수가 실행되지 않았고 즉 정의되지 않았다. 
```
```javascript
// 중첩 객체
// 중첩객체
var personObj = {
    lastName: 'chan-ho',
    sayHi: function() {
        console.log(`안녕하세여 ${this.lastName}입니다`)  
    },
    determine: function() {
        console.log(this === personObj)
    },
    dog: {
        sayHello: function() {
            console.log(`hi ${this.lastName}'s dog`)
        },
        determine: function() {
            console.log(this === personObj)
            console.log(this === personObj.dog)
        }
    }
}
personObj.sayHi(); // 안녕하세여 chan-ho입니다
personObj.determine() // true
personObj.dog.sayHello() // hi undefined's dog --> lastName이 dog 객체에 선언 되어 있지 않으므로  undefined
personObj.dog.determine() 
// personObj 는 false   // personObj.dog는  true
```
- 중첩객체에서도 가장 가까운 부모 객체를 참조한다.

## 함수 바인딩 
> `call`, `apply`, `bind`를 사용해서 원하는 객체에 바인딩 시킬 수 있다.
오직 함수에서만 사용이 가능하다

- `call`
```javascript
var personObj2 = {
    lastName: 'chan-ho',
    sayHi: function() {
        console.log(`안녕하세여 ${this.lastName}입니다`)  
    },
    determine: function() {
        console.log(this === personObj)
    },
    cat: {
        sayHello: function() {
            console.log(`hi ${this.lastName}'s cat`)
        },
        determine: function() {
            console.log(this === personObj)
            console.log(this === personObj.cat)
        }
    }
}
personObj2.cat.sayHello() // personObj2의 lastName을 참조 할수 없으므로 undefined이 뜬다
// 아래 코드로 고치면 된다
personObj2.cat.sayHello.call(person) // 
personObj2.cat.determine.call(person) // true
```
위의 코드에서 처럼 `call`을 이용하여 가장 상위의 객체로 묶어 주면 내부 객체 안에서 상위 객체의 속성을 `this`로 참조 할 수 있게 된다.

```javascript
// 한 함수로 돌려 막기
function sayHello() {
    console.log(`hi ${this.name}`)
}

var me = {
    name: 'lee chang ho'
}

var you = {
    name: 'ho seung'
}
sayHello.call(me) // hi lee chang ho
sayHello.call(you) // hi ho seung
```
this에 바인딩 할 객체를 첫번째 인자로 받아서 함수 호출 시 객체를 this로 세팅한다. this를 지정한 객체로 직접 바인딩 한다.

- `apply` 
`call`과 비슷하지만 매개변수를 추가하는 방식이 다르다.
```javascript
function addNumber(a, b, c, d) {
    console.log(this.name + ' calculated ' + (a+b+c+d))
}

var changHao = {
    name: 'lee'
}
var kim = {
    name: 'jisuk'
}
addNumber.call(kim, 1, 2, 3, 5) // jisuk calculated 11
addNumber.apply(kim, [1, 2, 3, 4]) // jisuk calculated 10
```
`apply`는 뒤에 함수 인자를 어레이 형식으로 받아서 전달 한다.

- `apply`를 언제 사용하나? 
정의된 함수가 array 형식의 인자를 받을 수 없을 떄 사용
```javascript
var nums = [1,2,3, 4, 5];
Math.max(nums) // NaN
Math.max.apply(this, nums); // 5

function sum() {
    var toal = 0;
    for(var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(total)
}
sum([1, 2, 3]) // 01,2,3 --> 제대로 계산이 안된다
sum.apply(this, [1, 2, 3]) // 6
```

- `bind`
`bind`는 이미 `this`라는 컨텍스트를 가진 함수를 반환한다.
```javascript
function addNum(a, b, c, d) {
    return this.name + ' calculated ' + (a + b + c + d);
}
var hoho = {
    name: 'hoho'
}

var hohoCal = addNum.bind(hoho, 1, 2, 3, 4);
hohoCal() 
```
`bind`는 `call`, `apply`와 다르게 즉시 실행되지 않고 나중에 실행된다.
```javascript
// 연습문제
var colt = {
    lastName: 'colt',
    say: function() {
        setTimeout(function() {
            console.log('Hi' + this.lastName);
        }, 1000);
    }
};
colt.say() // Hi undefined
```
setTimeout은 window 객체의 메소드 이므로 setTimeout에 의하여 콜백함수가 실행되면 참조되는 객체는 전역의 window객체가 되므로 `this.lastName`은 `undefined`가 된다.

하지만 `bind` 메소드를 이용하여 `this`를 colt 객체와 바인딩 시킨다.
```javascript
var colt = {
    lastName: 'colt',
    say: function() {
        setTimeout(function() {
            console.log('Hi' + this.lastName);
        }.bind(this), 1000);  // 여기에서의 this???
    }
};
colt.say() //
```
