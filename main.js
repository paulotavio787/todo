
var listElement = document.querySelector("#box ul");
var inputElement = document.querySelector("#box input");
var btnElement = document.querySelector("#box button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos(){
    
    listElement.innerHTML = ""
    
    for(todo of todos){

        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo + " ");
        var linkElement = document.createElement("a");
        var linkText = document.createTextNode("Delete");
        
        linkElement.setAttribute("href", "#");
        position = todos.indexOf(todo);
        linkElement.setAttribute("onclick", "deleteTodo(" + position + ")");
        
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        todoElement.appendChild(linkElement);
        linkElement.appendChild(linkText);

    }
    
}
renderTodos();

function addTodo(){
    todoText = inputElement.value;
    todos.push(todoText);

    inputElement.value = ""

    saveToStorage();
    renderTodos();
}
btnElement.onclick = addTodo;

function deleteTodo(position){
    todos.splice(position, 1);

    saveToStorage();
    renderTodos();
}

function saveToStorage(){
    localStorage.setItem("list_todos", JSON.stringify(todos));
}