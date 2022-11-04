let addButton = document.querySelector('#add-btn');
const todoInput = document.querySelector('#to-do-input');




let ulElements = document.querySelector(".Notes-adds");
console.log(ulElements)


let lists = [];


function addList() {
    lists.push(todoInput.value)
  addMore()
  clearInput();
  console.log(lists)
 

}

function addMore() {
  
  let add = "";
  

  for(let i = 0; i < lists.length; i++) {
    add += "<li>" + lists[i] + "</li>";
  }
  ulElements.innerHTML = add;

}

// Function to clear your input after your clicking add 
function clearInput (){
    todoInput.value = null;
   
}

