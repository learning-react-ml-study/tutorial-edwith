## 웹서버(Web Server)

- 웹 서버란, HTTP를 통해 클라이언트로 부터 받은 리소스 요청(request)을 HTML 이나 이미지 등의 리소스로 전달(return)해주는 프로그램
  * 리소스   
    + 일반적으로 서버의 보조 기억 장치에 있는 실제 파일을 가리킨다
- 웹 서버의 주된 기능은 콘텐츠를 제공하는 것이지만 파일 업로드 등의 클라이언트에서 제출한 폼을 수신하기 위해 콘텐츠를 전달 받는 기능도 있다
- 웹 브라우저 사이의 다수의 커넥션을 연결하여 HTML 문서 및 리소스등을 병렬로 전송하여 처리시간을 단축하는 서비스를 제공
- 웹 화면에 연동되는 동적 처리 수행(HTML문서 처리)
  * CGI 처리 - 펄(perl), 루비(ruby), PHP
  * Java Servlet - CGI의 대용량 처리의 문제점을 극복한 언어

참고)
1. 위키백과 - 웹서버
https://ko.wikipedia.org/wiki/%EC%9B%B9_%EC%84%9C%EB%B2%84


## 시장 구조
- Apache 의 하락세 및 Nginx 의 상승세

- Apache
  * open source
  * 웹서버계의 조상님
  * 아직은 높은 점유율 but 하락세
- Nginx
  * 적은 자원으로 더 빠르게 데이터를 서비스 할 수 있음
  * 가벼움과 높은 성능을 목표로 상승세

![image](https://user-images.githubusercontent.com/33097467/40543081-d01fda2e-605d-11e8-932d-86ff1e23fde9.png)

![image](https://user-images.githubusercontent.com/33097467/40543189-3d927aa8-605e-11e8-9cd2-3fde7f07e042.png)

참고)Netcraft - 2018.04 <br> https://news.netcraft.com/archives/2018/04/26/april-2018-web-server-survey.html
<br>

## Apache VS Nginx

- PC뿐 아니라 모바일/태블릿을 통해 웹 페이지를 접근하는 빈도가 계속적으로 증가하게 되어, 웹 서버 역시 늘어난 동시 접속 수를 얼마나 잘 수용할 수 있는가가 관건
<br>
- 클라우드 환경에서 Nginx vs Apache 속도 비교
http://blog.celingest.com/en/2013/02/25/nginx-vs-apache-in-aws/
<br>
- Nginx 아키텍처
![image](https://user-images.githubusercontent.com/33097467/40548871-e87eef02-6070-11e8-86a9-569acdbbd285.png)

  * Module로 구성
  * Event-driven 이면서 비동기 방식(Asynchronous)으로 동작
  * Single-threaded(worker 프로세스)
  * Non-blocking

<br>
[참고]
http://blog.naver.com/PostView.nhn?blogId=tmondev&logNo=220737182315
