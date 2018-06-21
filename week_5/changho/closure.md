# 클로저 

> 클로저의 정의 --> 클로저는 함수로서 외부 함수에서 선언된 변수에 접근 할 수 있는 함수이다. 

```javascript
function outer(a) {
    return function inner(b) {
        // 내부 함수에서 변수 a를 사용하고 있다. 
        // 이건 outer라는 외부 함수에서 선언된 변수로서 
        // 낸부 함수가 호출 될때 , 그 외부함수는 클로저라고 부르는 이너 함수를 리턴한다.   
        return a + b;
    }
}
outer(5)(5); // 10;
var out = outer(4);
out(3) // 7
// 내부 함수를 리턴해야 된다. 
// 추가적인 () 를 사용해서 내부함수를 호출 할 수 있고 또는 함수 호출전의 값을 변수에 할당 할 수 있다. 
// 내부 함수는 반드시 익명함수여야 한다. 
```

```javascript
// 클로저 인지 확인... 
// 1.
function outerFn() {
    var data = 'something';
    return function innerFn() {
        return 'jsts return from the inner'
    }
}
// 외부 함수에서 선언된 변수를 참조 하고 있지 않으므로 클로저라고 할 수 없다.  
// 2.
function outerFn2() {
    var data = 'something2'
    return function innerFn2() {
        var innerData = 'something from the inner';
        return data + ' ' + innerData;
    }
}
// 2번째는 클로저이다. 
// 클로저는 오직 외부함수에서 선언된 변수를 내부함수에서 사용할 때 에만 존재.
// 내부함수에서 외부의 어떤 변수도 사용하지 않는다면 그냥 중첩 함수일 뿐이다. 
```

```javascript
function outerFn(){
    var data = "something from outerFn";
    var fact = "Remember me!";
    return function innerFn(){
        return fact;
    }
}

var outer = outerFn();
outer(); // remember me
// 클로저는 내부함수에서 변수로 사용되는 내용만 기억한다. 
// 외부 함수의 모든 것을 기억하는 것이 아니다. 즉, 내부함수의 블록스코프에서 사용 할 수 있게 리턴해 줘야한다.
```

# 왜 사용하는가? 

## 프라이빗 변수 
다른 언어에서는 외부적으로 수정 할 수 없는 변수에 대해 지원 하지만 자바스크립트는 그러하지 못하다 이런 변수들을 프라이빗 변수라고 하는데 자바스크립트에서는 클로저가 해결 해 준다. 

```javascript
function counter() {
    var count = 0;
    return function () {
        count++;
        return count;
    }
}
var count = counter();
count(); // 1;
count(); // 2;

var count2 = counter();
count2(); // 1  --> count에 영향을 주지 않는다. 
count() // 3;
```
ex2.
```javascript
function classRoom() {
    var teacher = ['lee', 'kim'];
    return {
        getTeachers: function() {
            return teacher;
        },
        addTeachers: function(man) {
            return teacher.push(man);
        }
    }
}
var class1 = classRoom();
class1.getTeachers() // ['lee', 'kim'];
class1.addTeachers('suho') // ['lee', 'kim', 'suho'];
class1.addteachers('park') // ['lee', 'kim', 'suho', 'park'];

var class2 = classRoom();
class2.getTeachers() // ['lee', 'kim'];  --> class1에 영향을 받지 않는다. 
```

더 정확한 해결법...
```javascript
function classRoom() {
    var teacher = ['lee', 'kim'];
    return {
        getTeachers: function() {
            return teacher.slice(); // 외부 변수 teacher를 복사해서 새로 배열을 만든다.
        },
        addTeachers: function(man) {
            teacher.push(man); // 일단 멤버를 추가하고 
            return teacher.slice() // --> 새 어레이로 복사한다. 
        }
    }
}
var class1 = classRoom();
class1.getInstructors().pop(); // "kim"
class1.getInstructors(); // ["lee", "kim"]

```