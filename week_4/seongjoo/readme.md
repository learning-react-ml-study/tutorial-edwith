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

