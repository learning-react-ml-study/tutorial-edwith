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
// a(b())
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
    var func = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return func[mode];
}
// console.log(cal2('plus')(1,1))

//배열의 값으로도 사용할 수 있다.
var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},
    function(input){ return input / 2;}
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
var text = "this is global object"
function callbackFunction (callback) {
    callback();
}
 
function testFunction() {
    var text = "callback function is closure";
    callbackFunction(function () {
        console.log(text);
    });
}
// testFunction();

//비동기 프로그래밍
var number = 0;
function square(x, callback) {
    setTimeout(callback, 2000, x*x);
}
// square(2, function(x) {
//     number = x;
//     console.log('setTimeOut is :' + number)
// });
// console.log(number);