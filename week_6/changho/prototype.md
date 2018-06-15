# 생성자 함수

생성자 함수는 일종의 객체를 만들기 전의 설계도라고 할 수 있다. 만약 아래와 같이 같은 속성을 가진 객체를 여러개 만들어야 한는 경우
```javascript
var home = {
    bedroom: 1,
    bathroom: 2,
    sqFeet: 100
}
var home2 = {
    bedroom: 1,
    bathroom: 2,
    sqFeet: 100
}
var home3 = {
    bedroom: 1,
    bathroom: 2,
    sqFeet: 100
}
var home4 = {
    bedroom: 1,
    bathroom: 2,
    sqFeet: 100
}
// 이런 객체를 백개를 만들어야 한다면? 시간이 엄청 걸린다. 
```
이런 경우 생성자 함수를 이용하여 기본적인 설계도를 짜 둔다
```javascript
function House(bedroom, bathroom, sqFeet) {
    this.bedroom = bedroom;
    this.bathroom = bathroom;
    this.sqFeet = sqFeet;
}
```
