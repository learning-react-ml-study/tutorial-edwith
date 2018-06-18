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