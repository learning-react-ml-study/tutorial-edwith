
#비교 연산자 
##연산자란? 연산자란 값에 대해서 어떤 작업을 컴퓨터에게 지시하기 위한 기호


>>= -> 대입연산자 
###프로그래밍에서의 “비교”란 주어진 값들이 같은 지, 다른 지, 큰 지, 작은 지를 구분하는 것을 의미함.
비교 연산자를 사용하는데 비교 연산자의 결과는 true나 false 중의 하나
 True: 비교 결과 참	false: 비교 결과가 거짓 
Cf) True와 false는 블린(boolean)이라고 불리는 데이터 형식

##== vs ===
![비교 연산자](./img/1.jpg)

###코드 
<pre>
<code>
    alert(null == undefined); //true
    alert(null === undefined); //false
    alert(true == 1); //true
    alert(true === 1); //false
    alert(true == '1'); //true
    alert(true === '1'); //false
    alert(0 === -0); //true
    alert(NaN === NaN); //false
</code>
</pre>

##!= vs !==
![비교 연산자_부정](./img/2.jpg)


## >
###좌항이 우항보다 크다 
<pre><code> 
alert(5>20); //false
alert(6>1); //true
alert(24>24); //false
</code></pre>
반대의 경우 : (<)
## >= 
###좌항이 우항보다 크거나 같다 
<pre><code> 
alert(5>=20); //false
alert(6>=1); //true
alert(24>=24); // true 
</code></pre>

반대의 경우 : (<=)

------------------------------------------------------------------------------------
 
#조건문 

##Boolean : 숫자와 문자처럼 언어에서 제공하는 데이터 형으로 true와 false 두가지 밖에 없음. 조건문에서 핵심적인 역할 담당함.

##조건문: 주어진 조건에 따라서 에플리케이션을 다르게 동작하도록 하는 것

##문법
###if

If ( 조건 ) {
		조건이 참인 경우 실행
}
Else {
		조건이 거짓인 경우 실행 
}

####예제 
<pre><code>
Var rst = 0; 
If( rst == 3) {
	Alert(‘결과 값은 ‘ + rst + ‘입니다. ‘);
}else{
	Alret(‘결과물이 없습니다.’); 
}
/// 결과값이 없기 때문에 else문 안에 있는 알림이 뜸. 
</code></pre>

##else if
else if는 여러가지 조건을 비교할 때 사용함. 
- 특징 if나 else와는 다르게 여러 개가 올 수 있다 
else if의 모든 조건이 false-> else가 실행됨. else는 생략 가능

##조건문의 중첩
<pre><code>
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
</html>
</code></pre>

이 예제는 사용자가 입력한 값과 아이디의 값이 일치하는지를 확인한 후에 일치한다면 비밀번호가 일치하는지 보여줌. 이렇게 조건문은 조건문 안에 중첩해서 사용될 수 있다.

-&& : 좌항과 우항이 모두 참(true)일 때 참이 됨. 

-|| : '||'는 '||'의 좌우항 중에 하나라도 true라면 true가 되는 논리 연산자
-! not 연산자, 부정의 의미 , Boolean의 값을 역전. 

##01:조건문에 사용될 수 있는 데이터 형이 꼭 불린만 되는 것은 아님. 
관습적으로 0는 false
 0이 아닌 값은 true로 간주

##기타 false로 간주되는 데이터 형






-----------------------------------------------------------------------
#반복문 컴퓨터에게 반복적인 작업을 지시하는 방법
##문법

- while
<pre><code>
while (조건){
    반복해서 실행할 코드
}
</code></pre>
<pre><code>
Var cnt = 0;
while(cnt==10){
    document.write('coding everybody <br />');
	cnt++;
}
</code></pre>

* while문은 괄호 안의 조건을 가지고 종료 시킬 수 있음. 
 참(true) -> 중괄호 안의 코드 구간을 반복적으로 실행한다. 
거짓(false) -> 반복문이 실행되지 않는다. -> 종료 조건
**주의 반복문에서 종료조건을 잘못 지정하면 무한반복이 되거나, 반복문이 실행되지 않음.

##for
<pre><code>
for(초기화; 반복조건; 반복이 될 때마다 실행되는 코드){
    반복해서 실행될 코드
}
</code></pre>

<pre><code>
for(var i = 0; i < 10; i++){
    document.write('coding everybody'+i+'<br />');
}
//i를 0으로 초기화 한 후, document.write를 수행 후 I 값을 증가 시킴. I가 10이면 종료
</code></pre>


##break : 반복 작업 중단시키기
<pre><code>
for(var i = 0; i < 10; i++){
    if(i === 5) {
        break;
    }
    document.write('coding everybody'+i+'<br />');
}
</code></pre>

**반복문 안에서 break가 실행되면 반복문을 즉시 종료시키는 것

##continue 실행을 즉시 중단 하면서 반복은 지속 되게 함. 
<pre><code>

for(var i = 0; i < 10; i++){
    if(i === 5) {
        continue;
    }
    document.write('coding everybody'+i+'<br />');
}
</code></pre>

결과 값에서 coding everybody 5를 제외한 것들 출력 됨.

##반복문의 중첩 : 반복문 안에는 다시 반복문이 나타날 수 있음.

###FOR OF : 
<pre><code>
Const userList = [
{name : ‘kyeongrok’,age:31, score: 85},
{name : ‘jihyun’,age:31, score: 95},
{name : ‘minsup’,age:35, score: 76},
,
];

For(const user of userList){
    Console.log(‘user:’,user);
}
</code></pre>
*  userList에 3명분의 사용자 데이터가 들어있음. For of는 userList의 개수만큼 3번 반복함.
