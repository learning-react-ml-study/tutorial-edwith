~~~javacript
let mySet = new Set();
//new 키워드를 이용하여 인스턴스를 생성한다
//set : 중복없이 유일한 값을 저장하여로 할때 사용, 이미 존재하는지 체크할 때 유용

mySet.add("A");
mySet.add("B");
mySet.add("C");


//A라는 애가 있는지 확인
console.log(mySet.has("A"));

//delete를 이용하여 제거
mySet.delete("C");


//itorator를 사용하여 set의 모든 값을 출력
mySet.forEach(function(v){
  console.log(v)
});
~~~