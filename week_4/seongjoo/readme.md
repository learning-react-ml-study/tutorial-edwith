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

# 반복문

#### while

while (조건){
    반복해서 실행할 코드
}

    var i = 0;
    // 종료조건으로 i의 값이 10보다 작다면 true, 같거나 크다면 false가 된다.
    while(i < 10){
        // 반복이 실행될 때마다 coding everybody <br />이 출력된다. <br /> 줄바꿈을 의미하는 HTML 태그
        document.write('coding everybody <br />');
        // i의 값이 1씩 증가한다.
        i++
    }
    
#### for

for (초기화; 반복조건; 반복이 될 때마다 실행되는 코드){
    반복해서 실행될 코드
}

    var i = 0;
    while(i < 10){
        document.write('coding everybody '+(i*2)+'<br />');
        i++;
    }
    
#### break

반복문을 즉시 종료시킴

    for(var i = 0; i < 10; i++){
        if(i === 5) {
            break;
        }
        document.write('coding everybody'+i+'<br />');
    }
    
    // 실행결과
    
    coding everybody 0
    coding everybody 1
    coding everybody 2
    coding everybody 3
    coding everybody 4
    
#### continue

반복문을 특정 조건에서만 중단 후 반복이 지속되도록 함

    for(var i = 0; i < 10; i++){
        if(i === 5) {
            continue;
        }
        document.write('coding everybody'+i+'<br />');
    }
    
    // 실행결과
    
    coding everybody 0
    coding everybody 1
    coding everybody 2
    coding everybody 3
    coding everybody 4
    coding everybody 6
    coding everybody 7
    coding everybody 8
    coding everybody 9
    
#### 반복문의 중첩

    // 0부터 9까지 변수 i에 순차적으로 값을 할당        
    for(var i = 0; i < 10; i++){
        // 0부터 9까지의 변수를 j의 값에 순차적으로 할당
        for(var j = 0; j < 10; j++){    
            // i와 j의 값을 더한 후에 출력
            // String은 숫자인 i와 j의 데이터 타입을 문자로 형태를 변환하는 명령이다. 
            // String()을 제거하고 실행해보면 의미가 좀 더 분명하게 드러날 것이다.
            document.write(String(i)+String(j)+'<br />');
        }
    }
    
# 함수

    function 함수명( [인자...[,인자]] ){
       코드
       return 반환값
    }
    
함수 예시

    function numbering(){
        i = 0;
        while(i < 10){
            document.write(i);
            i += 1;
        }   
    }
    numbering();
    
    // 결과
    0123456789
    
#### return

함수의 결과를 반환하면서 함수를 종료시킴 (함수를 중지시키는 역할도 함)

#### 인자

인자(argument)는 함수로 유입되는 입력 값을 의미

![alt text](https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/743/1514.gif)

#### 함수를 정의 하는 다른 방법

    var numbering = function (){
        i = 0;
        while(i < 10){
            document.write(i);
            i += 1;
        }   
    }
    numbering();
    
# 배열

배열(array) - 연관된 데이터를 모아서 통으로 관리하기 위해서 사용하는 데이터 타입

변수가 하나의 데이터를 저장하기 위한 것이라면 배열은 여러 개의 데이터를 하나의 변수에 저장하기 위한 것

    var member = ['egoing', 'k8805', 'sorialgi']
    alert(member[0]);
    alert(member[1]);
    alert(member[2]);
    
결과

egoing
k8805
sorialgi

#### 배열의 사용 (배열 + 반복문)

    function get_members(){
        return ['egoing', 'k8805', 'sorialgi'];
    }
    members = get_members();
    // members.length는 배열에 담긴 값의 숫자를 알려준다. 
    for(i = 0; i < members.length; i++){
        // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
        document.write(members[i].toUpperCase());   
        document.write('<br />');
    }
    
결과

egoing
k8805
sorialgi

#### 배열의 제어

##### 배열의 크기

    var arr = [1, 2, 3, 4, 5];
    alert(arr.length);
    
결과 : 5

##### 배열의 조작

*추가*

push - 배열 끝에 원소를 추가하는 명령

    var li = ['a', 'b', 'c', 'd', 'e'];
    li.push('f');
    alert(li);
    
    // 결과 : a,b,c,d,e,f
    
concat - 복수의 원소를 배열에 추가하는 명령

    var li = ['a', 'b', 'c', 'd', 'e'];
    li = li.concat(['f', 'g']);
    alert(li);
    
    // 결과 : a,b,c,d,e,f,g
    
unshift - 배열의 시작점에 원소를 추가하는 명령

    var li = ['a', 'b', 'c', 'd', 'e'];
    li.unshift('z');
    alert(li);
    
    // 결과 : z,a,b,c,d,e
    
splice - 값을 자르거나 특정 인덱스 뒤에 값을 넣을 때 사용

    var li = ['a', 'b', 'c', 'd', 'e'];
    li.splice(2, 0, 'B');
    alert(li);
    
    // 결과 : a,b,B,c,d,e
    
https://opentutorials.org/course/50/110    
    
*제거*

shift - 배열의 첫번째 원소를 제거하는 명령

    var li = ['a', 'b', 'c', 'd', 'e'];
    li.shift();
    alert(li);
    
    // 결과 : b,c,d,e
    
pop - 배열의 마지막 원소를 제거하는 명령

    var li = ['a', 'b', 'c', 'd', 'e'];
    li.pop();
    alert(li);
    
    // 결과 : a,b,c,d
    
*정렬*

    var li = ['c', 'e', 'a', 'b', 'd'];
    li.sort();
    alert(li);
    
    // 결과 : a,b,c,d,e
    
역순으로 정렬

    var li = ['c', 'e', 'a', 'b', 'd'];
    li.reverse();
    alert(li);
    
    // 결과 : d,b,a,e,c
    
# 객체(Object)

#### 객체의 생성

방법 1

    var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
    
방법 2

    var grades = {};
    grades['egoing'] = 10;
    grades['k8805'] = 6;
    grades['sorialgi'] = 80;
    
방법 3

    var grades = new Object();
    grades['egoing'] = 10;
    grades['k8805'] = 6;
    grades['sorialgi'] = 80;
    
예시 1

    var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
    alert(grades['sorialgi']);
    
    // 결과 : 80
    
예시 2

    var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
    alert(grades.sorialgi);
    
    // 결과 : 80
    
객체 + 반복문

    var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
    for(key in grades) {
        document.write("key : "+key+" value : "+grades[key]+"<br />");
    }
    
    /* 
        결과
         
        key : egoing value : 10
        key : k8805 value : 6
        key : sorialgi value : 80 
    */
    
참고 : http://webclub.tistory.com/243

    var grades = {
        'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
        'show' : function(){
            for(var name in this.list){
                document.write(name+':'+this.list[name]+"<br />");
            }
        }
    };
    grades.show();
    
    /*
        결과
        
        egoing:10
        k8805:6
        sorialgi:80
    */
    
객체에는 객체와 함수를 담을 수 있음

# 모듈

프로그램은 작고 단순한 것에서 크고 복잡한 것으로 진화함. 그 과정에서 코드의 재활용성을 높이고, 유지보수를 쉽게 할 수 있는 다양한 기법들이 사용됨.

그 중 하나가 코드를 여러개의 파일로 분리하는 것. 이를 통한 효과는 아래와 같음.

- 코드 재활용 가능
- 코드를 개선하면 모든 애플케이션의 동작이 개선
- 수정시 로직을 빠르게 찾을 수 있음
- 메모리의 낭비 줄임
- 동일한 로직을 로드할 때 시간과 네트워크 트래픽을 절약 할 수 있음. (브라우저만 해당)

#### 라이브러리

라이브러리 - 자주 사용되는 로직을 재사용하기 편리하도록 잘 정리한 일련의 코드들의 집합을 의미함.

좋은 라이브러를 선택하고 잘 사용한 것은 프로그래밍의 핵심이라고 할 수 있음.

# UI와 API 그리고 문서보는 법

UI - User Interface

API - Application Programming Interface 약자. 프로그램이 동작하는 환경을 제어하기 위해서 환경에서 제공되는 조작 장치

프로그래밍을 공부하기 위한 자료 레퍼런스(reference)와 tutorial(안내서)

#### 자바스크립트의 API

자바스크립트 자체의 API, 자바스크립트가 동작하는 호스트 환경의 API로 구분

# 정규표현식

정규표현식(regular expression)은 문자열에서 특정한 문자를 찾아내는 도구

#### 정규표현식 생성

정규표현식은 컴파일(compile)과 실행(execution)의 두가지 단계로 나누어짐

참고 : https://opentutorials.org/course/909/5142