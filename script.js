let addButton = document.querySelector('#add-btn');
const todoInput = document.querySelector('#to-do-input');
let trying = document.querySelector('.to-do-input');
let checks = "";
let para = document.querySelector('#demo');
let mainUl = document.getElementById("#todo-lists")




function addList() {
    para.innerText += todoInput.value + "\r\n" ;
  
  clearInput();
  addMore();

}

function addMore() {

    


}


function clearInput (){
    todoInput.value = null;
   
}

