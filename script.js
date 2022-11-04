let addButton = document.querySelector('#add-btn');
const todoInput = document.querySelector('#to-do-input');




let ulElements = document.querySelector(".Notes-adds");
console.log(ulElements)


let lists = [];

// when add button is clicked, perform this action;
function addList() {
    lists.push(todoInput.value)
    checkNoteLength();
  addMore();
  clearInput();
  
 

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

// Function to clear your input after your clicking add 
function clearInput (){
    todoInput.value = null;
   
}

//SETS A MINIMUM TEXTS NOTE CHARACTERS 
function checkNoteLength(){
  let lengthCheck = document.querySelector('#to-do-input');
  console.log(lengthCheck)
 
if(lengthCheck.value.length < 3){
 alert("Note too short");
 lists.pop()

 
} else if(lengthCheck.value.length > 3) {
 return true;

}
}
