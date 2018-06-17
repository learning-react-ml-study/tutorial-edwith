# this

this는 함수 내에서 함수 호출 맥락(context)를 의미함.

함수를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라짐.

```js
function func(){
    if(window === this){
        console.log("window === this");
    }
}
func();

/*  result :
*   window === this
* */
```

객체의 소속인 메소드의 this는 그 객체를 가르킴

```js
var o = {
    func : function(){
        if(o === this){
            console.log("o === this");
        }
    }
}
o.func();   

/*  result :
*   o === this
* */
```

```js
var funcThis = null; 
 
function Func(){
    funcThis = this;
}
var o1 = Func();
if(funcThis === window){
    console.log('window');
}
 
var o2 = new Func();
if(funcThis === o2){
    console.log('o2');
}

/*  result :
*   window
*   o2
* */
```

생성자는 빈 객체를 만듬. 그리고 이 객체내에서 this는 만들어진 객체를 가르킴.

생성자가 실행되기 전까지는 객체는 변수에 할당될 수 없기 때문에 this가 아니면 객체에 대한 어떠한 작업을 할 수 없기 때문임. 

즉, 함수의 this는 window이며 생성자를 호출하면 생성자의 this는 생성자의 객체가 됨

```js
var o = {}
var p = {}
function func(){
    switch(this){
        case o:
            console.log('o');
            break;
        case p:
            console.log('p');
            break;
        case window:
            console.log('window');
            break;          
    }
}
func();
func.apply(o);
func.apply(p);

/*  result :
*   windows
*   o
*   p
* */
```

함수의 메소드인 apply, call을 이용하면 this의 값을 제어 가능함.

