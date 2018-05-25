## Learninng React Study - WEEK 2
-  author : Kim soojung
- index
  * browser 동작
  * browser에서의 웹 개발
  * 웹서버
  * WAS

## Browser 동작

1. 브라우저의 주요 기능
  - 유저가 요청한 페이지를 서버에 요청하 서버가 리턴한 페이지를 해석
  - 웹 표준화 기구 W3C에서 정한 표준 명세에 따라 HTML 파일을 해석
2. 브라우저의 기본 구조
![image](https://user-images.githubusercontent.com/33097467/40475565-e6b3f586-5f7c-11e8-83bb-7df480d156fa.png)   
3. Browser의 역할
- Parser : 데이터를 해석
- Rendering :데이터를 화면에 표시
- Render tree

### Rendering Engine

- 동작과정
1) HTML 문서를 파싱하고 콘텐츠트리 내부에서 태그를 DOM 노드로 변환.
2) 외부 CSS파일과 스타일 요소 파싱. 스타일 정보와 HTML 표시 규칙은 렌더 트리를 생성.
3) 랜더 트리 생성 후 배치 시작
    - 배치: 각 노드가 화면의 정확한 위치에 표시되는 것
4) UI백엔드에서 렌더 트리의 각 노드를 가로지르며 형상을 만들어 내는 그리기 과정.

* 렌더링 엔진은 내용을 빠르게 표시하기 위해 HTML의 파싱을 다 기다리지 않고 배치와 그리기 과정을 시작.

![image](https://user-images.githubusercontent.com/33097467/40476462-0b40f384-5f7f-11e8-8f8c-1e41ee516b66.png)

- 렌더 트리
  - 시각적으로 처리되는 요소이며 렌더 객체로 구성되어있음.
- 배치
  - 요소를 배치
- 어태치먼트(attachment)
  - 렌더 트리를 생성하기 위해 DOM노드와 시각 정보를 연결하는 과정


### DOM(Document Object Model)

- HTML 문서의 모든 요소에 접근하는 방법을 정의한 API
- HTML 문서의 DOM의 트리 구조 예시<BR>
![image](https://user-images.githubusercontent.com/33097467/40477431-5fdfdf7a-5f81-11e8-988f-93f8b7d470e2.png)
![image](https://user-images.githubusercontent.com/33097467/40477444-6c42f1bc-5f81-11e8-811d-fc701bd9b33a.png)s

추가)
- 컴파일 : CPU가 알아들을 수 있는 machine code 또는 VM이 알아들을 수 있는 byte code 코드로 변환하는 단계
- 문서 파싱 : 브라우저가 코드를 이해하고 사용할 수 있는 구조로 변환하는 것을 의미
<br>
참고) https://d2.naver.com/helloworld/59361
  http://wiki.gurubee.net/pages/viewpage.action?pageId=6259958

## Browser 에서의 웹개발

### 알게된 점

- java Script 는 가급적 html뒷쪽에 위치시키는게 좋다
    * js는 브라우저의 렌더링을 방해 (위치 선정 중요!)
- 또 다른 방법
  * defer / async 속성을 사용해서 선언한 곳과 스크립트 실행 시점을 분리
- css코드는 head에 위치시켜 렌링 처리시 브라우저가 빨리 처리할 수 있도록함

- meta 태그 : 브라우저에게 정보를 제공하기 위함
<code>meta name="viewport" content="width=device-width,initial-scale=1"</code>
  * viewport : 모바일이나 웹 환경에서 반응형 웹을 제공하기 위함
  * initial-scale : 페이지가 처음 로드될 때 줌 레벨을 조정 속성
<br>
참고) https://developer.mozilla.org/ko/docs/Mozilla/Mobile/Viewport_meta_tag



<br>
<생각해보기>

  - 우리가 흔히 브라우저 탐색을 할 때 스크롤을 하거나, 어떤 것을 클릭하면서 화면의 위치를 바꿀 때, 브라우저는 어떻게 다시 화면을 그릴까요?
  -  위에서 표현된 그림처럼 다시 렌더링 되지 않을까요?
