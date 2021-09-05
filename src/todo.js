const todoForm = document.getElementById("todo");
const list = document.getElementById("list");
const formInput = document.querySelector("#todo input")

let toDos = []

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove()
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveTodo();
}

function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(toDos))
}

function addToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);

}

function submitToDo(e){
    e.preventDefault();
    const newTodo = formInput.value;
    formInput.value = "";
    const objtodo = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(objtodo);
    addToDo(objtodo);
    saveTodo();
}

todoForm.addEventListener("submit", submitToDo )

const savedToDos = localStorage.getItem("todos")
if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(addToDo)
}