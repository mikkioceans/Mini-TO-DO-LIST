let addButton = document.querySelector('#add-btn');
const todoInput = document.querySelector('#to-do-input');




let ulElements = document.querySelector(".Notes-adds");



let lists = [];
//localStorage.setItem("lists", JSON.stringify(lists))
let localStore = JSON.parse(localStorage.getItem('lists'))

if(localStore){
  lists = localStore;
  addMore();
  
}


// when add button is clicked, perform this action;
function addList() {
    lists.push(todoInput.value)
    
  disableTextsIfEmpty();
    localStorage.setItem("lists", JSON.stringify(lists))
    
    
  addMore();
  
  todoInput.value = "";
  
 

}
// Loop through the empty array, 
// innerHTML is able to add html characters 
function addMore() {
  
  let add = "";
  

  for(let i = 0; i < lists.length; i++) {
    add += "<li>" + lists[i] + "</li>";
  }
  ulElements.innerHTML = add;

}





function disableTextsIfEmpty(){
  let lengthCheck = document.querySelector('#to-do-input');
  if(todoInput.value.trim() === "" || lengthCheck.value.length < 3) {
    lists.pop()
   alert("Todo list is too short or  empty ");
   
}
}

