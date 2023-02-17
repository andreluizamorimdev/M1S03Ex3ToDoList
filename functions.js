let todoList = [
    "Acordar", 
    "Ir ao banheiro", 
    "Tomar café da manhã", 
    "Preparar o Almoço", 
    "Almoçar", 
    "Estudar", 
    "Aula"
];


let ul = document.getElementById("list");
let search;

function listTasks() {
    todoList.forEach((task) => {
        let li = document.createElement("li");
        li.innerHTML = task
        ul.appendChild(li);
    });
    console.log(todoList);
}
listTasks();

function searchTasks() {
    const searchTask = todoList.find(task => {
        search = document.getElementById("searchInput").value;
        return task === search;
    });
    
    console.log(searchTask);
    
}

function editTasks() {
    const edited = todoList.splice(3, 1, "Fazer exercícios");
    console.log(`Tomar café da manhã foi editada para ${edited} com sucesso.`);
    
}
editTasks();

function deleteTasks() {
    const deleteTask = todoList.pop(3);
    console.log(`Removendo ${deleteTask} da lista de tarefas`);
}
deleteTasks();

function addTasks() {
    todoList.push("Jantar");
    console.log(`Adicionado ${todoList[6]} na lista de tarefas`);
}
addTasks();