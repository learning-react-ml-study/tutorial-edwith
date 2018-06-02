const notes = ['note 1', 'note 2', 'note 3'];

// 기본 array method
notes.pop();  // 배열의 마지막 요소를 제거한다.
notes.push('my new note');
console.log(notes); // [ 'note 1', 'note 2', 'my new note' ]
notes.reverse(); // 원본 어레이를 거꾸로 배치 시긴다. 
console.log(notes); // [ 'my new note', 'note 2', 'note 1' ]

const arr = [1, 2, 3, 4, 5]
// shift method
arr.shift() // 배열의 0번째 요소를 제거한다. 
// 현재 arr = [2, 3, 4, 5];
// unshift method 
arr.unshift(10); // 배열의 0번째 요소에 주어진 인자를 추가한다.
console.log(arr) // [ 10, 2, 3, 4, 5 ]

// slice method 
const arr2 = arr.slice(0, 2);
console.log(arr2); // [10, 2];
// arr.slice method는 배열의 시작부터 (end 인덱스 -1)까지 에 대한 새로운 배열을 리턴한다. 

// concat method 
const str = ['a', 'b', 'c'];
const num = [4, 5];
const newArr = str.concat(num);
console.log(newArr); // [ 'a', 'b', 'c', 4, 5 ] 
 // 두개의 배열을 이어 붙여 새로운 배열을 만든다.