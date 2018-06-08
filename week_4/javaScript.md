# JavaScript

- JavaScript 는 객체 기반의 스크립트 프로그래밍 언어로 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있다

### 실습 내용
- 변수
> 변수는 코드의 재사용성을 높여준다. 재활용성이 높으면 수정해야할 코드가 적어지고 그 과정에서 버그가 발생할 가능성을 낮춰준다.

![image](https://user-images.githubusercontent.com/33097467/41136576-d3a4b0f2-6b11-11e8-8e03-3c37716b6517.png)

- 비교
  * == : 좌항과 우항을 비교해서 값이 같다면 true, 다르면 false
  * === : 좌항과 우항이 정확하게 같을 때 true, 다르면 false
  * null : 프로그래머가 값이 없음을 명시적으로 표시
  * undefined : 프로그래머가 의도적이지 않게 설정한 값이 없는 상태
  * NaN : Not-a-Number, 특수한 데이터 형인데 숫자가 아니라는 뜻
  * != : 부정의 의미
  * !== : 정확하게 같지 않다는 의미
  <br>

### 함수

> 함수란 하나의 로직을 재실행 할 수 있도록 하는 것으로 코드의 재사용성을 높여준다. 재사용성이란 동일한 코드를 여기저기서 사용할 수 있는 상태로 만드는 것이. 재사용성으로 인한 기대효과는 유지보수가 용이하며 코드의 가독성이 좋아진다.

~~~
function add() {
  코드
  return 반환값
}

add();
~~~

- 함수의 출력
> 함수 내에서 사용한 return은 return 뒤에 따라오는 값을 함수의 결과로 반환하며 동시에 함수를 종료시킨다.
~~~
  function get_item01(){
    return 'apple';
    return 'hi'; //출력 안됨
    return 'fullstack'; //출력 안됨
  }
  function get_item02(){
    return 'banana';
  }
  alert(get_item01());
  alert(get_item02());
~~~

- 함수의 입력
> 인자(argument)란 함수로 유입되는 입력
~~~
//arg : 매개변수, parameter
function get_input(arg){
  return arg;
}

// prompt(~) : 인자, argument
alert(get_input(prompt("글자를 입력하세요")));
~~~

- 함수의 또 다른 표현
~~~
var get_input = function(arg){
  return arg;
}
alert(get_input(prompt("gd")));
~~~

### 배열

> 배열이란 연관된 데이터를 모아서 통으로 관리하기 위해서 사용하는 데이터 타입이다. 사용법은 문서를 보고 파라미터값을 설정. 자주 쓰는것은 외운다.

~~~
var member = ['soojung','developer','naverzz'];
for(var i=0; i< member.length ; i++){
  alert(member[i]);
}
~~~
<br>

  * push
    + 배열 끝에 원소를 추가  
    ![image](https://user-images.githubusercontent.com/33097467/41163649-3a487e94-6b74-11e8-93f4-f61e0c35409e.png)
<br>

  * concat
    + 복수의 원소를 배열에 추가

    ![image](https://user-images.githubusercontent.com/33097467/41163814-af3100c8-6b74-11e8-8c5f-11b1a250e312.png)
<br>

  ![image](https://user-images.githubusercontent.com/33097467/41163875-cd715646-6b74-11e8-8df9-0ee04f4c151a.png)
<br>

  * unshift
    + 배열의 시작점에 원소를 추가

    ![image](https://user-images.githubusercontent.com/33097467/41163984-06784e68-6b75-11e8-9af4-3281b1d8aa2b.png)
<br>

  * splice
    + splice(index, howmany, element)

    ![image](https://user-images.githubusercontent.com/33097467/41164040-2eda0a40-6b75-11e8-8ca8-ecf7d4dbf219.png)
<br>

  * shift
    + 배열의 첫번째 원소 제거

    ![image](https://user-images.githubusercontent.com/33097467/41164167-797600b8-6b75-11e8-891f-e9295839ecab.png)
<br>

  * pop  
    + 배열 끝점의 원소를 배열에서 제거

    ![image](https://user-images.githubusercontent.com/33097467/41164201-9019c264-6b75-11e8-91dc-239fdb0a1a34.png)
<br>

  * sort, reverse
    + 정렬, 역순으로 정렬

    ![image](https://user-images.githubusercontent.com/33097467/41164663-ae1a66fa-6b76-11e8-885a-610697198b0c.png)
<br>

### 객체

> 객체(dictionary) 는 아이템에 대한 식별자로 문자,숫자 사용가능, 배열은 자동으로 인덱싱되며 객체는 key,value로 객체 생성 가능

~~~
<ul>
  <script type="text/javascript">
    var point = {'soojung':78, 'lala':80, 'hey':45};
    for(key in point){
      document.write('<li>key :'+key+", value :"+point[key]+"</li>");
    }
  </script>
</ul>
~~~
- 객체에는 객체도 담을 수 있고, 함수도 담을 수 있다.
```
var grades = {
  'list': {'soo':90, 'lala':80, 'hoho':20},
  'show' : function(){
    for(var name in this.list){
      document.write(name+":"+this.list[name]+"<br/>");
    }
  }
};
grades.show();
```

### 모듈
> 함수가 자주 사용되는 것이라고 가정했을 때, 필요할 때마다 함수를 정의하는 것은 비효율적이며 유지보수가 어렵다. 따라서 모듈을 사용한다. 즉 다른 파일에서 해당 클래스나 함수가 필요할 때 가져와서 쓴다.

- main html
~~~
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="dbconnect.js"></script>
  </head>
  <body>
    <script type="text/javascript">
    alert(connect());
    </script>
  </body>
</html>
~~~

- dbconnect.js
~~~
function connect(){
  return 'success! db connecting'
}
~~~
- 결과

![image](https://user-images.githubusercontent.com/33097467/41170185-34846376-6b86-11e8-81a1-b5f8077fe44a.png)
