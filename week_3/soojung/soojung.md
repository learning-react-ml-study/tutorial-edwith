# HTML

### HTML tag

> Tag란 우편물이나 화물, 택배물 등에 붙여 화물의 분류나 송수신인, 취급 주의 등을 나타내는 인식표이다.

- HTML tag 는 HTML 문서를 이루는 문법적 표시 및 어떠한 항목을 보충 설명하는 키워드
- 태그를 사용할 때, 적절한 의미의 태그를 찾아서 설정
- contents 들을 의미에 맞게 묶는과정 및 지표

### HTML Layout tag

![image](https://user-images.githubusercontent.com/33097467/40820915-6da8ea20-659e-11e8-9144-151c028296f5.png)

### HTML 구조 설계

> HTML 문서는 doctype, html, head, body 의 선언과 택를 포함하는 구조로 만들어짐.
  * doctype
    + HTML 문서 형식에 관한 버전 정보를 알려주는 코드
    + 페이지 상단에 위치
    + 브라우저가 올바르게 화면을 표시하기 위한 항목
    + 선언하지 않는다면, 브라우저의 호환모드로 웹 페이즈를 해석하며 HTML 태그가 정확하게 표현이 안 될 수도 있음  
  * html
    + 문서의 시작과 끝에 해당하는 태그
  * head
    + 웹 브라우저에 표시되는 영역은 아니며, 여러 설정을 모아두는 곳
    + < title > : 문서의 제목
    + < style > : JS나 style sheet를 표시
    + < meta > : 문자 인코딩, 컨텐츠 타입등을 표시
  * body
    + 웹 브라우저에 표현할 모든 태그들이 들어갈 곳

### Class 와  Id 속성

> id
- 하나의 문서에 고유한 id
- 한페이지에 하나의 정의(style/css)로 하나의 태그(id)만 사용가능
- 로고, 상단메뉴(navigation), 하단정보처럼 페이지에서 유일한 것들에 사용
> Class
- 중복 사용 가능
- 주로 반복적으로 사용되는 스타일을 정의할 수 있음
- 반복되는 중간 소제목 등에 사용

### id, class, name 의 차이

![image](https://user-images.githubusercontent.com/33097467/40832432-489a039a-65c6-11e8-87f8-5a16527b0057.png)

### Reference
- 'HTML 기본 구조 알아 보기', http://mainia.tistory.com/2881
- 'html layout', https://www.w3schools.com/html/html_layout.asp
- 'id,class,name 속성의 차이', http://zuyo.tistory.com/523
