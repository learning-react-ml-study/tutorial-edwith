
### proxy 사용해보기
~~~javascript
const myObj = {name:'crong'};
const proxy = new Proxy(myObj,{
  get : function(target, property, receiver){
    console.log('get value');
  },
  set : function(target, property, value){
    console.log('set value');
  }
});

proxy.name;  //get메서드를 호출하여'get value가 찍힌다'
proxy.name = 'hehe';  //set메서드를 호출하여'get value가 찍힌다'
~~~

proxy를 생성할 때는 'javascript new Proxy()' 를 사용한다. </br>
첫번째 인자값으로는 proxy를 적용할 해당 오브젝트를 넣고, 두번째에는 발생하게 된 메서드를 정한다.</br>

~~~javascript
get : function(target, property, receiver){
    console.log('get value');
  },
~~~
###### get메서드에서의 파라미터 값들
target : Proxy를 감싸고 있는 객체를 말함, 여기서는 myObj</br>
property : Proxy의 property를 뜻함. 'proxy.name'의 명령어를 치면 이때 property는 name이 됨</br>
receiver : Proxy객체 자신을 말함</br>

###### get메서드에서의 파라미터 값들
target : Proxy를 감싸고 있는 객체를 말함, 여기서는 myObj</br>
property : Proxy의 property를 뜻함. 'proxy.name;'의 명령어를 치면 이때 property는 name이 됨</br>
value : 대입하려는 값을 뜻함 'proxy.name = "honey";'의 명령어를 치면 이때 value는 "honey"가 됨</br>

### proxy 활용해보기

~~~javascript

const myObj = {name:'crong', count : 0};
const proxy = new Proxy(myObj,{
  get : function(target, property, receiver){
    return target[property];
  },
  set : function(target, property, value){
    console.log('set메서드 호출');
    target[property] = value;
    target['count']++;                  // target에 접근할때 []안에는 문자열로 들어가야 한다.
                                        // 이것으로 보아 property도 문자열인것을 확인 할 수 있다.
  }
});

console.log('proxy.name : '+proxy.name);  //get메서드를 호출하고 리턴값으로 name을 출력
console.log('proxy.count : '+proxy.count);  //get메서드를 호출하고 리턴값으로 count를 출력, 이때는 count가 0이 출력됨
proxy.name = 'hehe';               //set메서드를 호출, proxy에 정의된 메소드로 인해 count가 1증가
console.log('proxy.name : '+proxy.name);  //name이 바뀐것을 확인 할 수 있음
console.log('proxy.count : '+proxy.count);  //count가 1이 된것을 확인 할 수 있음

myObj.name = 'kyky';               //proxy로 접근하지 않고 바로 myObj로 접근하여 name을 바꿈
console.log('proxy.name : '+proxy.name);  //name이 바뀐것을 확인 할 수 있음
console.log('proxy.count : '+proxy.count);  //proxy로 접근하지 않아 count는 그대로 1이다.
~~~

위의 소스코드 처럼 myObj로 접근을 하였을 경우에는 proxy안에 있는 메서드가 작동이 안된다.</br>
이를 보안하기 위해 myObj를 아래와 같이 익명으로 선언한다.
~~~javascript
const proxy = new Proxy({name:'crong', count : 0},{
  get : function(target, property, receiver){
    return target[property];
  },
  set : function(target, property, value){
    console.log('set메서드 호출');
    target[property] = value;
    target['count']++;
  }
});
~~~

### Reflect 사용하기
target[property]를 이용하여 데이터를 가지고 오는 것보다 Reflect를 이용하여 데이터를 가지고 오는 것이 더 좋다고 함.....
~~~javascript
const proxy = new Proxy({name:'crong', count : 0},{
  get : function(target, property, receiver){
    //Reflect를 이용하여 접근하기
    return Reflect.get(target,property);
  },
  set : function(target, property, value){
    console.log('set메서드 호출');
    target[property] = value;
    target['count']++;
  }
});
~~~

### 이용자가 없는 값으로 property로 사용할 때, Default값 리턴하기

~~~javascript
const proxy = new Proxy({name:'crong', count : 0},{
  get : function(target, property, receiver){
      //삼항연산자를 이용하여 default값을 정의
    return (property in target) ? target[property] : "anonymous";
  },
  set : function(target, property, value){
    console.log('set메서드 호출');
    target[property] = value;
    target['count']++;
  }
});
~~~
