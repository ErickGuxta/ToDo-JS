//Seleção elementos
const taskForm = document.querySelector(".tasks-add")
const taskInput = document.querySelector(".tasks-add input")
const generalTasks = document.querySelector(".general-task-list")
const generalTasksDone = document.querySelector(".general-task-list-done")
const searchForm = document.querySelector(".tasks-search")
const searchInput = document.querySelector(".tasks-search input")


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
    checkBtn.classList.add("check-btn")
    const removeBtn = document.createElement("img")
    removeBtn.classList.add("remove-btn")
    const editBtn = document.createElement("img")
    editBtn.classList.add("edit-btn")


    checkBtn.src = "imgs/incon-check.svg"
    removeBtn.src = "imgs/icon-lixo.svg"
    editBtn.src = "imgs/icon-edit.svg"

    icons.appendChild(checkBtn)
    icons.appendChild(removeBtn)
    icons.appendChild(editBtn)
    taskView.appendChild(icons)

    //IMPORTANDO TASK VIEW PARA O TO-DO
    generalTasks.appendChild(taskView)

    taskInput.value = ""//limpar input após o submit
    taskInput.focus() //foca no input após o submit
}

//Eventos
//Adicionar tarefa
taskForm.addEventListener("submit", (element) => {
    element.preventDefault() //não quero enviar o form par ao back, ja que to trabalhando com o front
    const inputValue = taskInput.value
    if (inputValue.trim() === "") {
        alert("O campo não pode esta vazio")
    } else{
        saveTodo(inputValue)
    }
})

//Pesquisar tarefa

searchForm.addEventListener("submit", (element) => {
    element.preventDefault()

    const inputValue = searchInput.value
    const taskViews = document.querySelectorAll(".task-view")

    taskViews.forEach(taskView => {
        const contentTask = taskView.querySelector(".content-task")

        if (contentTask.innerText !== inputValue) {
            taskView.style.display =  "none"
        } else{
            taskView.style.display = "block"
        }
    })

    searchInput.value = ""//limpar input após o submit
    searchInput.focus() //foca no input após o submit
})



document.addEventListener("click", (element) => {
    const targetEl = element.target
    const parentEl = targetEl.closest(".task-view")

    if(!parentEl) retun //se não encontrar a tarefa evita erro

    if (targetEl.classList.contains("check-btn")) {
        generalTasksDone.appendChild(parentEl)
    } else if (targetEl.classList.contains("remove-btn")) {
        parentEl.remove()
    } else if (targetEl.classList.contains("edit-btn")){
        const contentTask = parentEl.querySelector(".content-task")
        const newText = prompt("Edite sua tarefa", contentTask.innerText)

        if (newText !== null) {
            contentTask.innerText = newText.trim() !== "" ? newText : contentTask.innerText
        }
    }
} )

