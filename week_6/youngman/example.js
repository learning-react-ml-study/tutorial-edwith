var name = "global var";
//let
function varhome(){
    var homevar = "homevar";
    for(var i=0; i<100; i++){

    }
    console.log(i);
}

function lethome(){
    var homevar = "homevar";
    for(let i=0; i<100; i++){
        console.log(i);
    }
    console.log(i);
}

// varhome();
// lethome();

//const
function consthome(){
    const home = [1,2,3,4];
    home = [4,5];
    console.log(home)
    //const를 기본으로 사용한다.
    //그런데 변경이 될 수 있는 변수는 let을 사용한다.
    //var는 사용하지 않는다

}

//immutable array
function immutableFucntion(){
    const list = ['apple', 'orange', 'watermelon'];
    list.push('banana');
    // list = ['banana']
    console.log(list)
}
// immutableFucntion()

function immutableFucntion2(){
    const list = ['apple', 'orange', 'watermelon'];
    list2 = ['mango'].concat("banana",list,'very')
    // list = ['banana']
    console.log(list2)
}
immutableFucntion2()