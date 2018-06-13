◆ Arguments ◆ 

function sum(){
  var i, _sum=0;
  for(i=0; i<arguments.length; i++) {
      document.write(i+' : '+arguments[i])+'<br />') ;
      _sum+=arguments[i];
    }
    return _sum;
}
document.write('result :'+sum(1,2,3,4));

javascript는 매개변수가 달라도 error가 발생하지 않음
위의 경우도 함수는 매개변수를 받는 표시가 없지만 sum(1,2,3,4)로 10이라는 값을 도출할 수 있음

arguments: 사용자가 전달한 인자가 저장된 공간
length를 통해 인자가 4개 전달된 것을 알 수 있음
☞ arguments에 있는 인자를 하나씩 꺼내서 sum에 적용

function zero() {
	console.log(
		'zero.length', zero.length, 
		'arguments', arguments.length
		);
}

function one(arg1) {
	console.log(
		'one.length', one.length,
		'arguments', arguments.length
		);
}

function two(arg1, arg2) {
	console.log(
		'two.length', two.length,
		'arguments', arguments.length
		);
}

one('vall', 'val2');  //함수호출
arguments.length를 통해 몇 개의 인자가 유입되는지 파악
one.length: 함수에서 몇개의 인자가 정의되었는지 =>1
arguments.length: 몇개의 인자를 실제로 받았는가 =>2
이 때 위 2개가 일치해야 하는 경우, 다르면 error발생

◆ 함수의 호출 ◆ 

function func() {
}
func();
//기본함수호출:func라는 함수

function sum(arg1, arg2) {
	return arg1+arg2
}
alert(sum.apply(null, [1,2]))  //sum(1,2); 와 같은 함수호출방식
주로 null이 아닌 다른 인자를 투입

o1={val1:1, val2:2, val3:3}
o2={v1:10, v2:50, v3:100, v4:25}
function sum() {
	var _sum=0;   //sum.apply를 통해 var this=o1;라는 암시적 의미가 포함됨
	for(name in this) {
		_sum += this[name];
	}
	return _sum; 
}
alert(sum.apply(o1)) 
alert(sum.apply(o2))

apply를 통해 this값을 o1에 부여하여 o1객체의 속성인 것처럼 동작: 
o1={val1:1, val2:2, val3:3, sum:sum}
o2={v1:10, v2:50, v3:100, v4:25, sum:sum}
와 동일한 의미로 o1.sum, o2.sum으로 메서드 구현
※위를 실행하면 sum에 sum이라는 함수도 더해진 결과값이 나옴
