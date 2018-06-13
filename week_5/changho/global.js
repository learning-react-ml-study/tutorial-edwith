// console.log(global);
var foo = 123
function func() {
    console.log(global.foo);
    console.log(foo);
}
func();