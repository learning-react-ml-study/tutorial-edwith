# 언어소개

JS는 웹브라우저를 프로그래밍적인 제어를 하는 언어로부터 시작됨<br>
현재는 서버사이드언어(node.js), 로봇, Iot 등에도 쓰이게 됨

## 역사

네스케이프에서 만들어졌으며 마이크로소프트에서도 익스플로러에 jscript라는 이름으로 탑재됨. 후에 ECMA라는 표준화 기구로 이 언어의 관리 주체가 옮겨짐

## ECMAScript

Ecma International에 의해서 관리되는 자바스크립트 표준안<br>
ES6가 현재는 많이 쓰는 ECMAScript. ES6이후 년도 별로 업데이트 중임

언어란 의사소통을 위한 약속

환경이란 언어를 사용하는 대상

# 실행방법과 실습환경

html 파일 직접 실행해서 보여드리겠습니다.

개발자도구 - 크롬, 파이어폭스, 사파리 등 거의 모든 브라우저에서 제공

가장 잘 쓰이는 것은 크롬 개발자도구

console에서 자바스크립트 간단한 것은 테스트 가능

## 도구 (에디터)

- atom (https://atom.io/)
- Visual Studio Code (https://code.visualstudio.com/)
- node++ (https://notepad-plus-plus.org/)
- editplus (https://www.editplus.com/kr/) 유료
- ultraedit (https://www.ultraedit.com/) 유료
- sublime text (https://www.sublimetext.com/) 기업유료
- bracket (http://brackets.io/) 프론트엔드만 한다면 추천
- webstorm (https://www.jetbrains.com/webstorm/) 유료
- eclipse (https://www.eclipse.org/downloads/)

자기 입맛과 환경따라 다르게 쓰면 된다고 생각함.

# 숫자와 문자

자바스크립트에서는 큰 따옴표나 작은 따옴표가 붙지 않은 숫자는 숫자로 인식함

    alert(1+1);
    
result: 2

    alert(2 * 5);
    
result: 10

    alert(6 / 2);
    
result: 3

사칙연산도 되지만 좀 더 복잡한 연산도 가능. 자바스크립트 사전(https://opentutorials.org/course/50/39)

    Math.pow(3,2); // 9
    Math.round(10.6);   // 11
    
문자는 "(큰 따옴표) 혹은 '(작은 따옴표) 중 하나로 감싸야함. String 이라고 
    
    alert(typeof "10")
    
result: string

    alert(typeof 10)
    
result: number

    alert('egoing\'s javascript')
    
\ 뒤에 있는 기호는 단순히 문자로 해석하도록 강제할 수 있음. 이러한 기법은 이스케이프라고 함.
	
    alert("coding"+" everybody");

문자열 결합은 +로 가능

# 변수

변수 - 값을 담는 컨테이너

JS 변수 - var

    var a = 1;
    alert(a+1); // 2
    
변수는 코드의 재활용성을 높여줌

변수의 효용은 뒤에 배우게 될 반복문, 조건문, 함수와 결합되면 더욱 더 중요해짐

# 주석

주석(comment) - 코드에 대한 취지 및 설명

// or /**/

# 줄바꿈과 여백

;(세미콜론) - 명령이 끝낫다는 것을 명시해줌

자바스크립트는 줄바꿈을 하면 명령이 끝낫다는 것을 알려주나 세미콜론을 쓰는 것이 더 구별하기 쉬움

# 비교

연산자 - 값에 대해서 어떤 작업을 컴퓨터에게 지시하기 위한 기호

비교 - 주어 값들이 같은지, 다른지, 큰지, 작은지 구분하는 것을 의미

#### 동등 연산자

==연산자, ===연산자 좌항 우항을 비교해서 서로 값이 같다면 true, 아니면 false

===연산자는 '정확'하게 좌항 우항이 같아야함. 데이터형이 같은 경우에만 같다고 판단

그렇기 때문에 === 연산자만 써야함

    alert(1=='1');  //true
    alert(1==='1'); //false
    
#### 부정과 부등호

'!'은 부정을 의미, '같지 않다'

!==, != 등 우항 좌항이 같지 않을때 true가 되게 됨

부등호 

    >,<,>=,<=

수학시간에 배우는 부등호와 동일한 역할을 하게 됨

ex) 

    alert(10>20);   //false
    alert(10>10);   //false
    
    alert(10>=20);      //false
    alert(10>=10);      //true
    
# 조건문

조건문 - 주어진 조건에 따라서 애플리케이션이 다르게 동작하도록 하는 것

if - if 뒤 괄호에 조건문이 들어오고 조건이 true가 되면 조건이 담겨진 괄호 다음의 중괄호 구문이 실행

else - if문 조건이 false라면 else 이후 중괄호 구간이 실행됨

else if - 다양한 조건을 부여할 수 있도록 함

    if(false){
        alert(1);
    } else if(false){
        alert(2);
    } else if(false){
        alert(3);
    } else {
        alert(4);
    }
    
#### 변수와 비교연산자

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8"/>
    </head>
    <body>
        <script>
            id = prompt('아이디를 입력해주세요.');
            if(id=='egoing'){
                password = prompt('비밀번호를 입력해주세요.');
                if(password==='111111'){
                    alert('인증 했습니다.');
                } else {
                    alert('인증에 실패 했습니다.');
                }
            } else {
                alert('인증에 실패 했습니다.');
            }
        </script>
    </body>

만약 비밀번호와 아이디 값을 일치하는 것을 조건문을 중첩하여 만든다면 위와 같은 것. 위와 같이 조건문안에 조건문을 중첩되게 사용할 수 있음.

#### 논리연산자

&& (AND) - 좌항 우항이 모두 참이여야 true

|| (OR) - 좌항과 우항 중 하나가 참이면 true

! (NOT) - Boolean 값을 반대로 만들어줌. true -> false, false -> true

#### boolean의 대체제

0 -> false,1 -> true

1이 아닌 값들(문자열도 포함)은 fasle로 간주됨

  