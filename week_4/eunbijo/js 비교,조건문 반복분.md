# 비교
## 비교 연산자
+ ==

우항과 좌항을 비교해서 서로 값이 같다면 true를 돌려주고 아니면 false를 돌려준다
+ ===

== 와 다르게 데이터 타입도 일치할때 만 true를 되돌려준다
+ !=

같지 않다를 의미하며 ==의 반대의 결과를 보여준다
+ !==

정확하게 같지 않다를 의미하며 ===의 반대의 결과를 보여준다
+ '>, <'

'>': 좌항보다 우항이 크면 true그렇지 않으면 false이다

'<': >와 반대의 의미로 반대의 결과를 보여준다
+ '>=, <='

'>,<'의결과 에서 같은 값 일때도 true를 되돌려준다

# 조건문
## if
```
if(조건식){

}
```
조건식이 true일 경우 if문 안 블럭이 작동된다

## else
```
if(조건식){

}else{

}
```
위의 if의 조건식에 해당되지 않으면 작동된다

## else if
```
if(조건식1){

}else if(조건식2){

}
```
조건식1이 해당 안되고 조건식2가 해당될 때 작동된다

## switch ~ case
```
switch(변수){
   case  값1 :
      break; 
   case  값2 :
      break; 
   …
  default : 
      break;
}
```
변수에 해당되는 값이 case문에 있을시 그 이후 문장이 실행되고 break문이 있으면 실행을 빠져나온다

## 삼항 조건 연산자
변수 = (조건식) ? 값1 : 값2;  
조건식이 면 변수에 값1이 할당되고 면 값2가 할당된다.
 
## 논리 연산자
+ &&  
and를 의미하며 좌우항 모두 true이여야 true이다
+ ||  
or를 의미하며 좌우항 둘중 하나라도 true이면 true이다
+ !  
부정을 의미하며 true를 false로 false를 true로 만들어 준다

#boolean 대체제
+ true  
1, “1”, [1]
>”true”는 되지 않는다

+ false  
0, ”0”, “”, [], [[]], [0]
>”false”는 되지 않는다

+ null  
undifined

# 반복문

## for
```
for(초기값 선언; 한계값 설정; 증감율 설정){

}
```
변수가 초기값에서 시작하여 증감율만큼 증가하다가 한계값에 될때 for문 빠져나온다  

## while
```
while(조건식){

}
```
조건식에 해당할때 까지 계속 while문을 돈다

## do~while
```
do{

}while(조건식);
```
while문과 비슷하지만 조건식과 상관없이 먼저 한번 실행되고 그 이후 조건식에 해당하는 지 여부에 따라 실행된다

## 반복문 제어(break, coutinue)
break : 실행중인 반복문 블럭을 빠져나오게 하는 문장  
coutinue :  실행중인 하나의 반복문은 중단되지만 그이후의 반복은 지속되는 문장
