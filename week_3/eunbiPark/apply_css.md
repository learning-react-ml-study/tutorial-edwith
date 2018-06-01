# CSS 적용 방법 & 우선순위

### 1. 인라인 스타일 (Inline Style Sheet)
+ HTML 태그의 stlyle 속성에 CSS 코드를 넣는 방법
    ~~~html
    <div style="display: none"></div>
    ~~~

### 2. 내부 스타일 (Internal Style Sheet)
+ `<head></head>` 안에 작성하는 방법
+ 재사용성이 떨어짐
    ~~~html
    <head>
    <style>
        div{
            display: none;
        }
    </style>
    </head>
    <body>
        <div><p>내부 스타일 방식</p></div>
    </body>
    ~~~

### 3. 외부 스타일 (External Style Sheet)
+ 별도의 CSS 파일에 작성해 파일의 경로로 포함시키는 방법
    ~~~html
    <!--상대 경로-->
    <link href="../seongjoo/06float.css" rel="stylesheet">
    <!--절대 경로-->
    <link href="/week_3/seongjoo/06float.css" rel="stylesheet">
    
    <body>
         <div><p>외부 스타일 방식</p></div>
    </body>
    ~~~
    
### 4. 스타일 강제 적용
+ **!important** 선언을 통해 해당 속성에 가장 높은 우선순위를 부여
    ~~~html
     <head>
        <style>
            div > p{
                color: red; !important;
            }
        </style>
        </head>
        <body>
            <div><p style="color: black">내부 스타일 방식</p></div>
        </body>
    ~~~
    
- - -
#### **우선순위**
>  
>`!important > 인라인 스타일 > 내부 스타일 > 외부 스타일 > 기본 브라우저 스타일 `
>   