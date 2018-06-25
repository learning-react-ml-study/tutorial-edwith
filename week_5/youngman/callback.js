//함수의 선언
function a(){
    console.log('a()')
}
var b = function(){
    console.log('b()')
}
c = {
    d:function(){
        console.log('d()')
    }
};
// a()
// b()
// c.d()
// a(0)
// a(c.d())

//함수는 값이므로 다른 함수의 인자로 전달 될 수 있음
function cal(func, num){
    return func(num)
}

function increase(num){
    return num + 1
}
// console.log(cal(increase,1))

//함수는 함수의 리턴 값으로도 사용된다.
function cal2(mode){
    mode = 'plus'
    var calculate = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return calculate['plus'];
}
// console.log(cal2('plus')(1,1))
// cal2('plus')(1,1)
//배열의 값으로도 사용할 수 있다.
var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},//121
    function(input){ return input / 2;}//60.5
];
var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}
// console.log(input)

//콜백
function sortConfig(a, b){
    return a - b;
}
var numbers = [20,10,9,8,7,6,5,4,3,2,1];
numbers.sort(sortConfig)
// console.log(numbers)


//콜백함수는 클로저이다.
function callbackFunction (a) {
    a();
} 
function testFunction() {
    var text = "callback function is closure";
    callbackFunction(function () {
        console.log(text);
    });
}
// testFunction();

// function () {
//     console.log(text);
// }

//비동기 프로그래밍
var number = 0;
function square(x, callback) {
    setTimeout(callback, 0, x*x);
}
// square(2, function(x) {
//     number = x;
//     console.log('setTimeOut is :' + number)
// });
// console.log(number);


// o1={val1:1, val2:2, val3:3, sum:sum}
// o2={v1:10, v2:50, v3:100, v4:25, sum=sum}
// function sum() {
// 	var _sum=0;   //sum.apply를 통해 var this=o1;라는 암시적 의미가 포함됨
// 	for(name in this) {
// 		_sum += this[name];
// 	}
// 	return _sum; 
// }
// console.log(sum.apply(o1)) 
// console.log(sum.apply(o2))


// var person = {};
// person.name = '홍길동';
// console.log(person.name)

function Person(name){
    this.name = name;
}

var p1 = new Person('11111','22222')
console.log(p1.name)