document.addEventListener('DOMContentLoaded',e=>{
            
   //Setup key handler for input
   document.getElementById("addInput").addEventListener('keypress',ev=>{
       if(ev.key === "Enter") {
           let inputEl = document.getElementById("addInput");
           handleAdd(inputEl.value);
           inputEl.value = "";                    
       }
   });

   //Set some initial items if user's never been here before.
   if(window.localStorage.getItem("visited") === null){

       let initial = [
           {
               id: generateUUID(),
               done: true,
               text: "Go to store"
           },
           {
               id: generateUUID(),
               done: false,
               text: "Add item to todo list"
           },
           {
               id: generateUUID(),
               done: false,
               text: "Review Code of this project."
           }
       ]

       writeStorage(initial);
       window.localStorage.setItem("visited","true");
   }

   //Get Todos from localstorage.
   displayItems();
});

function generateUUID() {
   return (Math.random() + 1).toString(36).substring(7);
}

function getTodosFromStorage() {
   var todosLS = window.localStorage.getItem("todos");
   return (todosLS !== null) ? JSON.parse(todosLS) : [];
}    

function writeStorage(todoList){ 
   let tdList = JSON.stringify(todoList);
   window.localStorage.setItem("todos",tdList);
}

//displays items in the todo list.
function displayItems() {
   //Get local storage
   var todoList = getTodosFromStorage();

   //remove all the items being listed.
   if(document.querySelectorAll("ul#todos li").length) {
       document.querySelectorAll("ul#todos li").forEach(t=>{
           t.remove();
       })
   }
   
   //insert individual todos.
   todoList.forEach(todo => {
       displayToDo(todo);
   });
}

//Handler for adding an item.
function handleAdd() {
   //Add to storage
   
   //fetch storage
   let storage = getTodosFromStorage();


   //we need a unique ID
   var uuid = generateUUID();
   var ob = {
       id: uuid,
       done: false,
       text: document.getElementById("addInput").value,
    };

   //add item to storage
   storage.push(ob);

   //save storage.
   writeStorage(storage);

   //call display because there's been a change.
   displayItems();
}


//Handle done
function handleDone(todoId) {
   //Get local storage
   let todos = getTodosFromStorage();


   todos.forEach((t,i,todos)=>{
   if(t.id == todoId){
           t.done = !t.done;
       }
   });
   //save to localstorage.
   window.localStorage.setItem("todos",JSON.stringify(todos));
   displayItems();
}

/*  Fluency: DOM manipulation
   This code shows an example of creating elements and injecting them into 
   the DOM, 
*/
function displayToDo(todoObject) {
   //Create Elements
   var li = document.createElement("li");
   var check = document.createElement("input");
   let trash = document.createElement("span");
   check.setAttribute("type","checkbox");
   check.setAttribute("data-id",todoObject.id);

   trash.innerHTML = '🗑️';
   trash.classList.add("trash");

   //add a handler for the done checkbox.
   li.addEventListener("click",e=>{ 
       handleDone(li.querySelector('input').getAttribute("data-id"));
   });

   trash.addEventListener("click",e=>{
       removeTodo(li.querySelector('input').getAttribute("data-id"));
       e.stopPropagation();
   })

   if(todoObject.done === true) {
       check.setAttribute("checked",true);
   }

   var label = document.createElement("label");
   label.innerHTML = todoObject.text;

   //Append Elements to list item.
   li.appendChild(trash);
   li.appendChild(check);
   li.appendChild(label);

   document.querySelector("ul#todos").appendChild(li);
}

/*  Fluency: localStorage
   This code shows a real-life, working example of localstorage.
   Fetching, parsing, writing, and saving to localstorage of objects.
*/

function addToStorage(todoObject){
   //Get local storage
   let t = getTodosFromStorage();

   //Add object
   t.push(todoObject);

   //Save to local storage.
   window.localStorage.setItem("todos",JSON.stringify(t));
}

//Handle removing a todo
function removeTodo(todoId) {
   var todos = getTodosFromStorage();

   //Toggle the todo.
   todos.forEach((t,i,todos)=>{
   if(t.id == todoId){
           todos.splice(i,1);
       }
   });

   window.localStorage.setItem("todos",JSON.stringify(todos));
   displayItems();
}

function handleComplete() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if(todos == null) { return; }
    document.getElementById("todos").innerHTML = '';
    //get each item
    todos.forEach(item => {
       //check if complete
       if (item.done == true) {
           displayToDo(item);
       }
    });
 }

 function handleIncomplete() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if(todos == null) { return; }
    document.getElementById("todos").innerHTML = '';
    //get each item
    todos.forEach(item => {
       //check if incomplete
       if (item.done == false) {
           displayToDo(item);
       }
    });
 }

 function handleAll() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if(todos == null) { return; }
    document.getElementById("todos").innerHTML = '';
    //get each item
    todos.forEach(item => {
       //check all
       
           displayToDo(item);
     
    });
 }