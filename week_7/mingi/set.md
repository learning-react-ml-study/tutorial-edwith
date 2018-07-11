#Set에 대하여 

~~~javascript
let mySet = new Set();
//new 키워드를 이용하여 인스턴스를 생성한다
//set : 중복없이 유일한 값을 저장하여로 할때 사용, 이미 존재하는지 체크할 때 유용

mySet.add("A");
mySet.add("B");
mySet.add("C");

//set안에 A가 있는지 확인
console.log(mySet.has("A"));

//delete를 이용하여 제거
mySet.delete("C");


//iterator를 사용하여 set의 모든 값을 출력
mySet.forEach(function(v){
  console.log(v)
});
~~~

new Set 구문은 비어 있는 새로운 set 을 만듭니다.

~~~javascript
let mySet = new Set();
mySet.add("A").add("B");
mySet.forEach(function(v){
  console.log(v)
});
//출력 결과 : "A","B"
~~~

new Set(iterable) 구문은 새로운 set 을 만들고 인자로 전달된 이터러블(iterable)로 데이터를 채웁니다.

~~~javascript
let arr = [1,1,2,3,4,5];
let mySet = new Set(arr);  //new Set(iterable) 형태로 set 생성
mySet.forEach(function(v){
  console.log(v);
});
//출력 결과 : 1,2,3,4,5
~~~
set.size 구문은 set 안에 담겨 있는 데이터의 개수를 조회합니다.</br>
set.has(value) 구문은 주어진 값이 set 안에 존재할 경우 true 를 리턴합니다.</br>
set.add(value) 구문은 주어진 값을 set 에 추가합니다. 만약 그 값이 이미 set 안에 존재하면 아무 일도 일어나지 않습니다.</br>
set.delete(value) 구문은 set 에서 주어진 값을 제거합니다. 만약 그 값이 set 안에 존재하지 않으면 아무 일도 일어나지 않습니다. .add() 구문과 .delete() 구문은 모두 set 객체 자신을 리턴합니다. 따라서 구문을 체인(chain) 시킬 수 있습니다.</br>
set[Symbol.iterator]() 구문은 set 안의 값들을 순회할 수 있는 새로운 이터레이터를 리턴합니다. 보통의 경우 이 메소드를 직접 호출할 일은 없습니다. 하지만 이 메소드의 존재 때문에 set 은 이터러블(iterable) 합니다. 즉, for (v of set) {...} 같은 구문을 쓸 수 있습니다.</br>
~~~javascript
let arr = [1,1,2,3,4,5];
let mySet = new Set(arr);  
console.log(mySet.size);   // 출력결과 : 5
console.log(mySet.has(5);) // 출력결과 : true
console.log(mySet.has('5')); // 출력결과 : false
mySet.add('5');
console.log(mySet.has('5'));  // 출력결과 : true
mySet.delete(3);
for(let value of mySet){
  console.log(value);  // 출력결과 : 1,2,4,5,"5"
}
~~~
set.clear() 구문은 set 안의 모든 데이터를 제거합니다.

# WeakSet에 대하여
WeakSet의 존재이유는 메모리 릭을 막기 위함입니다.
WeakSet를 사용하면 가비지 컬렉터가 메모리를 회수하여 메모리 릭을 막습니다.
### WeakMap 은 new, .has(), .get(), .set(), .delete() 만 지원합니다.
### WeakSet 은 new, .has(), .add(), .delete() 만 지원합니다.
### WeakSet 에 저장되는 value 와 WeakMap 에 저장되는 key 는 반드시 객체여야 합니다.


~~~javascript
//weakSet의 메서드는 has(), add(), delete()가 끝이다.
let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let ws = new WeakSet();

ws.add(arr);
ws.add(arr2);
console.log(ws.has(arr));           // true
console.log(ws.has([1,2,3,4]));     // false
console.log(arr === [1,2,3,4]);     // false
console.log(arr == [1,2,3,4]);      // false
arr = null; // arr=null을 한 순간 가비지 컬렉터로 인해 기존에 있던 arr([1,2,3,4])는 메모리상에 없어져 버린다.
console.log(ws.has(arr));          // false
console.log(ws.has(arr2));         // true

/* 반복자를 사용해서 데이터를 빼올 수 없음. 에러난당
ws.forEach(function(v){
  console.log(v);           
});
*/
~~~

출처 : http://hacks.mozilla.or.kr/2015/12/es6-in-depth-collections/