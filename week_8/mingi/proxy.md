
### proxy 사용해보기
~~~javascript
const myObj = {name:'crong'};

const proxy = new Proxy(myObj,{
  get : function(target, property, receiver){
    console.log('get value');
  },
  set : function(target, property, receiver){
    console.log('set value');
  }
});

proxy.name;  //get메서드를 호출하여'get value가 찍힌다'
proxy.name = 'hehe';  //set메서드를 호출하여'get value가 찍힌다'
~~~

proxy를 생성할 때는 ~~~javascript new Proxy() ~~~ 를 사용한다. </br>
첫번째 인자값으로는 proxy를 적용할 해당 오브젝트를 넣고, 두번째에는 발생하게 된 메서드를 정한다.</br>
