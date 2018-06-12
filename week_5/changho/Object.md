# 전역객체 (global Object)

> 전역객체란 글로벌 스코프 안에 항상 존재하는 객체, 전역 객체를 통해 전역 변수를 만들고 읽고 바꿀 수 있다. 전역스코프에서 this는 이 전역 객체를 가리킨다.

## 크로스 플랫폼에서 염두할 점 
브라우저와 node.js 에는 전역객체를 참조하는 전역 변수가 있지만 두 객체는 서로 다르다. 
- 브라우저에서 사용하는 전역객체는 window 
- node.js에서 사용하는 전역객체는 global

```javascript
// node 실행 환경 
var foo = 123
function func() {
    console.log(global.foo);
    console.log(foo)
}
func(); // 123 123 
global.func() // 123 123
```
```javascript
// 브라우저 실행
var foo1 = 123
function func() {
    console.log(window.foo1)
    console.log(foo)
}
window.func() // 123 123
func() // 123 123
```
모둔 객체와 함수는 전역 객체의 속성인 것을 알 수 있다. 

## 사용예 
- 전역 변수가 존재하는지 체크
```javascript
// 권장
if(window.someVariable) {// coding}
// do not do this way
if(someVariable) { //coding}
```

- 전역 스코프에 추가 
중첨된 스코프가 있더라도 전역객체를 통해 전역 스코프에 무언가를 추가 할 수 있다.
```javascript
if(!window.something) {
    window.something = // some method 추가
}
```

## 정리 
자바스크립트를 만든 브랜던 아이크는 전역객체를 만든 일이 가장 크게 후회하는 것 중 하나라고 한다. 전역 객체는 성능에 악 영향을 주고 변수 스코프 구현을 더 복잡하게 만들며, 코드를 모듈화 하기 어렵게 하기 때문이다. 

## 참조
[자바스크립트를 말하다](http://www.hanbit.co.kr/store/books/look.php?p_code=B3604189413)


[지혜로우신 mdn](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)