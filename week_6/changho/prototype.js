function A() {}
var a = new A()
console.log(a);
console.log( a.constructor.prototype) // false

// function Member(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getName = function () {
//         return `${this.lastName} 으로 불러여`
//     }
// }

// var member1 = new Member('lee', 'changho')

// console.log(member1.getName()) // changho 으로 불러여

// function Member (firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// };

// var member2 = new Member('kim', 'jisuk');
// Member.prototype.getName = function() {
//     return `${this.lastName} ${this.firstName}이라고 불러 주세여`
// }


// console.log(member2.getName()) // jisuk이라고 불러 주세여

// 인스턴스에서의 실시간 인식
function Member (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

var member2 = new Member('kim', 'jisuk'); // 인스턴스를 먼저 생성
Member.prototype.getName = function() { // 메서드 추가
    return `${this.lastName} ${this.firstName}이라고 불러 주세여`
}


console.log(member2.getName()) // jisuk이라고 불러 주세여

// proto chain

function Animal () {}; // 동물 수퍼 클래스 정의
Animal.prototype = {
    walk: function() {
        console.log('걷는다');
    }
}

var Dog = function() {
    console.log(this) // Dog{}
    Animal.call(this);
}

Dog.prototype = new Animal()

var d = new Dog();
d.walk() // 걷는다

function Person (name) {
    this.name = name
};

// 프로토 타입
Person.prototype.sayHi  = function () {
    return `Hello ${this.name}`;
}

var eli = new Person('Eli');

console.log(
    eli.sayHi()
)
// 상속
// 기본 클래스에서 서브 클래스로 메소드 전달 
// 기본 클래스 생성
function Person2(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person2.prototype.sayHello = function(){
    return "Hello " + this.firstName + " " + this.lastName;
}

function Student(firstName, lastName){
    // return Person2.call(this, firstName, lastName);
    return Person2.apply(this, arguments); 
    // Person2 클래스를 현재의 Student 클래스로 바인딩
}

// 기본 클래스의 프로토타입을 다른 서브 클래스의 프로토타입에 할당
Student.prototype = Person2.prototype;


var elie = new Student('Elie', 'Schoppik');

console.log(
    elie.sayHello()
)
// 위 방식의 문제점 
// 한 객체에 다른 객체로 할당 할 수 없다. 그저 참조만 할 뿐이다. 
// 그러므로 Student.prototype을 변경하면 Person2.prototype 도 변경된다. 
// example
Student.prototype.status = function() {
    return 'at now Stduent';
}
var colt = new Person2('Colt', 'Steele');
console.log(
    colt.status() // at now Stduent
)

// 그러므로 Object.create 메소드를 사용
function Parent(home, child) {
    this.home = home;
    this.child = child;
}

function Child(home, child) {
    return Parent.apply(this, arguments);
}

Child.prototype = Object.create(Parent.prototype);

Child.prototype.status = function() {
    return 'i am child';
}

var changHao = new Parent('suwon', 3);
console.log(changHao.status); // undefined; 
// Child.prototype의 변경이 Parent.prototype에 영향을 주지 않는다.

Array.prototype.map = function(callback) {
    var newArr = [];
    for(var i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
}