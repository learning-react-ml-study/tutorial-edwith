# HTML Tags

태그는 그 의미에 맞춰서 사용해야함

- 링크 (a)
- 이미지 (img)
- 목록 (ul/ol)
- 제목 (h1,h2,h3,h4,h5,h6,p)

필요한 태그를 찾아서 적절한 의미에 맞는 태그를 사용하는 것이 중요함

# HTML Layout 태그

레이아웃을 구성하는 태그도 의미에 맞춰서 씀

- header
- section
- nav
- footer
- aside

# HTML 구조설계

화면을 보면서 구조를 분석해야함

먼저 영역을 나눠서 큰 부분부터 분리함(상단/본문/네비게이션 등)

그 뒤에 각 영역 안의 내용 역시 여러 가지 형태일텐데 이 형태마다 적절한 태그를 쓰면 됨

CSS코드를 같이 구현하지 않고 HTML로 먼저 문서의 구조를 잡아가는 것이 개발 단계에서 유리함. 

# class 와 id 속성

### ID

- 고유한 속성으로 한 HTML 문서에 하나만 사용 가능함
- 고유한 ID값 있으면 특별한 제어를 할 수 있으며 검색에 용의함

### Class

- 하나의 HTML문서 안에 중복해서 사용 가능함
- 하나의 태그에 여러 개의 다른 class 이름을 공백을 기준으로 나열할 수 가 있습니다.
- 홈페이지 전체적인 스타일을 일관성 있게 지정하기 위해서는 class의 사용이 필수적임

# CSS 선언방법

### 1. inline

html 태그 안에 적용, 가장 먼저 적용됨

    <p style="border:1px solid gray;color:red;font-size:2em;">​
    
### 2. internal

style 태그로 지정함, 구조와 스타일이 섞이므로 유지보수가 어려움

    <head>
    <style>
    p  {
      font-size : 2em;
      border:1px solid gray;
      color: red;
    }
    </style>
    </head>
    
    <body>
    <div>...</div>
    </body>​
    
### 3. external

외부파일로 지정하는 방식

    <html>
    	<head>
    		<link rel="stylesheet" href="style.css">
    	</head>
    	<body>
    		<div>
    			<p>
    				<ul>
    					<li></li>
    					<li></li>
    					<li></li>
    					<li></li>
    				</ul>
    			</p>
    		</div>
    	</body>
    </html>​​
    
### 4. 우선순위

inline은 별도의 우선순위를 가지며, internal과 external은 우선순위가 동등함.

겹치게 선언이 있을 경우 나중에 선언된 속성이 반영됨.

# 상속과 우선순위 결정

상위에서 적용한 스타일은 하위에도 반영됨 (예외도 있음)

같은 선택자라면 나중에 선언한 것이 반영됨

선택자의 표현이 구체적인 것이 있다면 먼저 적용됨

ID > CLASS > ELEMENT 순으로 반영

# CSS Selector

### tag로 지정하기

    <style>
         span {
           color : red;
         }
     </style>
     
### id로 지정하기

    <style>
         #spantag {
           color : red;
         }
    </style>
    
    <body>
         <span id="spantag"> HELLO World! </span>
    </body>
    
### class로 지정하기

    <style>
         .spanClass {
         color : red
         }
    </style>
    
    <body>
         <span class="spanClass"> HELLO World! </span>
    </body>
    
# CSS 기본 Style 변경하기

CSS style 적용은 글자색, 배경색 등이 가장 자주 사용되는 것

### 웹폰트

https://fonts.google.com/earlyaccess

https://googlefonts.github.io/korean/

### 벡터기반 아이콘

https://fontawesome.com/

https://xpressengine.github.io/XEIcon/

# Element가 배치되는 방법(CSS layout)

block 은 블록 가지고 쌓이게됨(display:block, display:inline-block)

inline 은 우측으로, 그리고 아래쪽으로 빈자리를 차지하며 흐름(display:inline)

참고링크 : https://htmlreference.io/
 
position 속성은 엘리먼트를 상대적/절대적으로 어떤 위치에 엘리먼트를 배치하는 것에 수월함 (z-index의 지옥을 겪지 않는다면..)<br>
기본 속성은 static임

absolue는 기존에 따라 특별한 위치에 위치함<br>
기준점은 상위 엘리먼트로 단계적으로 찾아가는데 static이 아닌 position이 기준점임. 

relative는 원래 자신이 위치해야 할 곳을 기준으로 이동함

fixed는 viewport(전체화면) 좌측, 맨 위를 기준으로 동작

### 간격

margin, padding

### float

원래 flow에서 벗어날 수 있고 둥둥 떠다닐 수 있음

### box-model

블록 엘리먼트의 경우 box의 크기와 간격에 관한 속성으로 배치를 추가 결정함

https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model

### box-sizing

box-sizing:border-box로 지정하면 엘리먼트의 크기를 고정하면서 padding 값만 늘릴 수 있음.

# float 기반 샘플 화면 레이아웃 구성

소스코드 확인

# 디버깅-HTML-CSS

크롬 개발자도구 - https://developers.google.com/web/tools/chrome-devtools/inspect-styles/?hl=ko

파이어폭스 개발자도구 - https://www.mozilla.org/ko/firefox/developer/

사파리 개발자도구 - https://support.apple.com/ko-kr/guide/safari/sfri20948/mac

개발자 도구 장점

- CSS style을 inline 방식으로 빠르게 테스트할 수 있음
- 현재 엘리먼트의 값을 임시로 바꿀 수 있음
- 최종 결졍된 CSS 값을 확인할 수 있음
