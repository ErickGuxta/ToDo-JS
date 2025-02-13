//Seleção elementos
const taskForm = document.querySelector(".tasks-add")
const taskInput = document.querySelector(".tasks-add input")
const generalTasks = document.querySelector(".general-task-list")

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

    //ciando botoes
    const icons = document.createElement("div")
    icons.classList.add("icons")

    const checkBtn = document.createElement("img")
    const RemoveBtn = document.createElement("img")

    checkBtn.src = "imgs/incon-check.svg"
    RemoveBtn.src = "imgs/icon-lixo.svg"

    icons.appendChild(checkBtn)
    icons.appendChild(RemoveBtn)
    taskView.appendChild(icons)

    generalTasks.appendChild(taskView)

}
//Eventos

taskForm.addEventListener("submit", (element) => {
    element.preventDefault() //não quero enviar o form par ao back, ja que to trabalhando com o front
    const inputValue = taskInput.value
    if (inputValue.trim() === "") {
        alert("O campo não pode esta")
    } else{
        saveTodo(inputValue)
    }
})