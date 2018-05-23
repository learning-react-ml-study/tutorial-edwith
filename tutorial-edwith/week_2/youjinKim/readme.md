# browser에서의 웹 개발

1. Browser에서 웹 개발 방법

2. 도구
 + 크롬 개발자 도구
    + Elements : Html, 스타일 속성 편집 가능
    + Console : Javascript 실행, 페이지에 대한 엘리먼트 접근 가능, jQuery에 익숙하다면 셀렉터 작업 가능, Dom 접근 및 이벤트 찾기 등
    + Source : 왼쪽 파일 관리창, 가운데 소스 데이터, 오른쪽 디버깅 관련 패널 
    + Network : static source, dynamic source(ajax) 확인 
 + https://jsfiddle.net/
    + 웹의 프론트엔드 기술인 HTML, CSS, JavaScript를 웹에서 작성해서 바로 테스트 해볼 수 있고, 그 소스를 저장 공유할 수 있는 서비스
    + FORK 버튼은 현재의 코드를 그대로 복제하는 기능이다. 버전관리 시스템으로 치면 Branch
    + TidyUp 버튼은 소스코드의 가독성을 높여주는 기능
    + JSLint 버튼은 JSLint를 이용해서 자바스크립트의 유효성을 검사하는 기능
    + Share 버튼을 이용해서 소스코드를 공유할 수 있다. 이 중에 embed를 이용하면 아래와 같이 소스코드를 웹페이지 안에 삽입 가능
       -  Hello world : https://jsfiddle.net/eot63art/
    + Collaborate 작업 화면을 서로 공유하면서 개발 가능하다 팀뷰어와 유사
      - https://jsfiddle.net/youjinkim/sp8htrry/
 + http://jsbin.com/?html
    + jsFiddle과 유사  
    
3. 샘플 코드
```html
<!doctype html>
<html>
  <head>
    <!-- meta tag 설명 : https://support.google.com/webmasters/answer/79812?hl=ko -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello</title>   
  </head>
  <body>
    <h1>안녕하세요</h1>
    <div>만나서 반갑습니다.</div>
    <script src="js/library.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```


 [edwith-browser에서의 웹 개발 Click](http://www.edwith.org/boostcourse-web/lecture/16664/)
