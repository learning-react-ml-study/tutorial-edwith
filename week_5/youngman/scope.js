// var vscope = 'global';
// function fscope(){
//     var test = 'local'
//     console.log(test);
// }
// fscope()
// console.log(test)
// var my = '홍길동';
a()

// var a = function(){
// console.log('1111')
// }

function a(){
console.log('1111')
}
// (function(){
//     console.log(my);
//     var my = '김길동';
//     (function(){
//         console.log(my)
//         var my ='이길동';
//         console.log(my)
//     })();
//     console.log(my);
// })();

// function a(){
//     console.log(my)
//     var my ='이길동';
//     console.log(my)
// }
// a()

// function fscope(){
//     var vscope = 'local';
//     var lv = 'local variables'
//     console.log(lv);
// }
// fscope();
// console.log(lv)

// 함수밖 선언 
// var vscope = 'global';
// function fscope(){
//     var vscope = 'local';
//     // console.log(vscope);
// }
// fscope();
// console.log(vscope)


//함수안 선언 
// var vscope = 'global';
// function fscope(){
//     vscope = 'local';
//     console.log('함수안'+vscope);
// }
// fscope();
// console.log('함수밖'+vscope);

//무한루프
// function a(){
//     i = 0;
// }

// for(var i=0; i < 5; i++){
//     a()
//     console.log(i)
// }

// 익명함수
// (function(){
//     var MYAPP = {}
//     MYAPP.calculator = {
//         'left' : null,
//         'right' : null
//     }
//     MYAPP.coordinate = {
//         'left' : null,
//         'right' : null
//     }
//     MYAPP.calculator.left = 10;
//     MYAPP.calculator.right = 20;
//     function sum(){
//         return MYAPP.calculator.left + MYAPP.calculator.right;
//     }
//     // console.log(sum());
// }())

// java에서는 허용되지 않는 코드 javascript는 fucntion()에 선언하는 변수만 지역변수
// for(var i = 0; i < 1; i++){
//     var name = 'coding everybody';
// }
// console.log(name);


//정적 유효범위 
// var i = 5;
 
// function a(){
//     var i = 10;
//     b();
// }
 
// function b(){
//     console.log(i);
// }

// a();