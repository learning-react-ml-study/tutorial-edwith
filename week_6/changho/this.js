

// 글로벌 객체 
console.log(this);

var teacher = 'teacher';
console.log(window.teacher === teacher) // true

function whatIsthis() {
    console.log(this);
}
whatIsthis() // window

function person() {
    this.person = 'colt';
	console.log(this.person);
}

person() // colt  
// Obejct binding
var manObj = {
    firstName: 'lee',
    lastName: 'changhao',
    sayHi: function() {
        console.log(`hi ${this.lastName}`)  // this는 부모 객체를 가르킨다
    },
    determine: function() {
        console.log(this === manObj)
        return this === manObj;
    }
}

manObj.sayHi()  // hi changhao
manObj.determine() // true

// 중첩객체
var personObj = {
    lastName: 'chan-ho',
    sayHi: function() {
        console.log(`안녕하세여 ${this.lastName}입니다`)  
    },
    determine: function() {
        console.log(this === personObj)
    },
    dog: {
        sayHello: function() {
            console.log(`hi ${this.lastName}'s dog`)
        },
        determine: function() {
            console.log(this === personObj)
            console.log(this === personObj.dog)
        }
    }
}
personObj.sayHi(); // 안녕하세여 chan-ho입니다
personObj.determine() // true
personObj.dog.sayHello() // hi undefined's dog --> lastName이 dog 객체에 선언 되어 있지 않으므로
personObj.dog.determine() // false   // true
 
personObj.dog.sayHello.call(personObj) // hi chan-ho's dog

var colt = {
    lastName: 'colt',
    sayHi: function() {
        console.log(`hi ${this.lastName}`)
    }
};

var jino = {
    lastName: 'jino'
}

colt.sayHi.call(jino) // 같은 메소드를 쓸 필요 없이 호출이 가능하다

// 한 함수로 돌려 막기
function sayHello() {
    console.log(`hi ${this.name}`)
}

var me = {
    name: 'lee chang ho'
}

var you = {
    name: 'ho seung'
}
sayHello.call(me) // hi lee chang ho
sayHello.call(you) // hi ho seung

// apply
function addNumber(a, b, c, d) {
    console.log(this.name + ' calculated ' + (a+b+c+d))
}

var changHao = {
    name: 'lee'
}
var kim = {
    name: 'jisuk'
}
addNumber.call(kim, 1, 2, 3, 5) // jisuk calculated 11
addNumber.apply(kim, [1, 2, 3, 4]) // jisuk calculated 10