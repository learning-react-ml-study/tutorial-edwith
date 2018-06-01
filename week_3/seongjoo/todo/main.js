document.getElementById("InputText").focus();
// localStorage에 값이 있을 경우 todolist 추가
if(localStorage.length > 0){
    for (var i = 0; i < localStorage.length; i++) {
        var str = '<li class="shadow">' + localStorage.key(i) + '<span type="button" class="removeBtn">' + '<i class="far fa-trash-alt"></i>' + '</span>' + '</li>';
        document.querySelector(".todo-list").insertAdjacentHTML( 'beforeend', str );
    }
}
// removeBtn를 누르면 localStorage에서 해당 값이 삭제되고 removeBtn의 부모노드 삭제
var removeBtn = document.querySelectorAll('.removeBtn');
for (var j = 0; j < removeBtn.length; j++) {
    removeBtn[j].addEventListener('click', function() {
        var item = this.parentNode.textContent;
        console.log(item)
        localStorage.removeItem(item);
        this.parentNode.remove();
        location.reload();
    });
}
// input에서 enter를 누르거나 input값을 넣고 + 버튼 누를시
document.querySelector('.addContainer').addEventListener("click", addTodo);
document.getElementById("InputText").addEventListener("keyup",function(event) {
    event.preventDefault();
    if(event.keyCode === 13) {
        addTodo()
    }
});
// (input에서 enter를 누르거나 input값을 넣고 + 버튼 누를시) localStorage와 todolist에 값 넣음
function addTodo() {
    var inputText = document.getElementById("InputText").value.trim();
    if (inputText !== ''){
        var inputStr = '<li class="shadow">' + inputText + '<span type="button" class="removeBtn">' + '<i class="far fa-trash-alt"></i>' + '</span>' + '</li>';
        localStorage.setItem(inputText, inputText);
        document.querySelector(".todo-list").insertAdjacentHTML( 'beforeend', inputStr );
        document.getElementById("InputText").value = '';
    }
    location.reload();
}
document.querySelector('.clearAllBtn').addEventListener("click",removeAll);
function removeAll() {
    localStorage.clear();
    document.querySelector('.todo-list').innerHTML = '';
    location.reload();
}