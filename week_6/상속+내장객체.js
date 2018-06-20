## 상속: 객체의 로직을 그대로 물려받은 또 다른 객체를 만들 수 있는 기능
이때 기존의 로직을 수정해서 파생된 새로운 객체를 생성가능

function Person(name) {
	this.name=name;
	this.introduce=function() {
		return 'My name is'+this.name;
	}
}
var p1=new Person('yujin');
document.write(p1.introduce()+"<br />"); 
// My name is yujin

function Person(name) {
	this.name=name
}
Person.prototype.name=null;
Person.prototype.introduce=function() {
	return 'My name is'+this.name;
}
var p1 = new Person('yujin');
document.write(p1.introduce()+"<br />");
//위와 동일한 결과

function Person(name) {
	this.name=name;
}
Person.prototype.name=null;
Person.prototype.introduce=function() {
	return 'My name is'+this.name;
}

function Programmer(name) {
	this.name=name;
}
Programmer.prototype=new Person();

var p1=new Programmer('yujin');
document.write(p1.introduce()+"<br />");

function Person(name) {
	this.name=name;
}
Person.prototype.name=null;
Person.prototype.introduce=function() {
	return 'My name is'+this.name;
}

function Programmer(name) {
	this.name=name;
}
Programmer.prototype=new Person();
Programmer.prototype.coding=function(){
	return "hello world";
}
var p1=new Programmer('yujin');
document.write(p1.introduce()+"<br />")
document.write(p1.coding()+"<br />")
//My name is yujin
//hello world


## 표준내장객체(Built-in Object): 프로그래밍에 기본적으로 필요한 도구들

var arr=new Array('Seoul', 'New York', 'Ladarkh', 'Pusan', 'Tsukuba');
function getRandomValueFromArray(haystack) {
	var index=Math.floor(haystack.length*Math.random());
	return haystack[index];	
}
console.log(getRandomValueFromArray(arr));

#배열에 함수를 포함
Array.prototype.rand=function() {
	var index=Math.floor(this.length*Math.random());
	return this[index];
}
var arr=new Array('Seoul', 'New York', 'Ladarkh', 'Pusan', 'Tsukuba');
console.log(arr.rand())
