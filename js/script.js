//Seleção elementos
const taskForm = document.querySelector(".tasks-add")
const taskInput = document.querySelector(".tasks-add input")

//Funções
const saveTodo = (text) => {
    //criando o template de add tasks
    const taskView = document.createElement("div")
    taskView.classList.add("task-view")

    //criando texto interno
    const contentTask = document.createElement("p")
    contentTask.classList.add("content-task")

    contentTask.innerText = text
    taskView.appendChild(contentTask)

    console.log(taskView)



}
//Eventos

taskForm.addEventListener("submit", (element) => {
    element.preventDefault() //não quero enviar o form par ao back, ja que to trabalhando com o front
    const inputValue = taskInput.value
    if (inputValue) {
        saveTodo(inputValue)

    }
})