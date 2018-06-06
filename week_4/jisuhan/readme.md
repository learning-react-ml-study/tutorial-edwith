
## JS Comparison

```
== (equal)
=== (strict equal)
!= (not equal)
!== (strict not equal)
> (greater than)
< (less than)
>= (greater than or equal to)
<= (less than or equal to)
```

**Tip 1 : 여기서 체크하고 넘어가야할 부분은 == 대신 === 을 쓰고 != 대신 !==를 쓰는 것이 좋다 정도입니다**

https://dorey.github.io/JavaScript-Equality-Table/

## JS Conditional Expression

if, else if, else

```
if(true){
  console.log('logging')
}
//logging
```

조건이 들어가는 소괄호()에 들어가는 조건이 true면 중괄호{} 안에 코드 실행

```
if(condition){
  console.log(something)
} else if(condition){
  console.log(else)
} else {
  console.log(blah)
}
```
위 문법을 간단히 나타내기
```
condition ? value if true : value if false
```

**Tip2 : condition 은 true 아니면 false가 된다. 알아둬야할 operator => &&(and), ||(or)**

**Tip3 : false로 간주되는 데이터형 '', undefined, null, NaN(Not A Number)**

## JS Iteration Statement (Loop)

for loop, while loop

syntax:

```
for(초기값; 범위; 반복될 때마다 실행될 코드){
  console.log('jisu')
}

while(범위){
  console.log('jisu')
}
```

**Tip4 : 언제 for을 쓰고 언제 while을 쓸까? for 범위를 확실하게 알때, while 범위를 확실하게 모를때**

**Tip5 : 제어 continue, break**

**Tip6 : 이중 중첩 for 문 안에 for 문**

## JS Function

코드의 재사용성을 높인다 => 반복작업을 줄인다

syntax:
```
function NAME(arg1, arg2 ...){
  ...
  return arg1 + arg2
}
//Invoke function
NAME(1, 2);
```

**Tip7 : 함수를 사용할 땐 입력과 출력만 생각하자
