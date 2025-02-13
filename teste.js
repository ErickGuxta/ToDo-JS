document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.querySelector(".tasks-add");
    const taskInput = document.querySelector(".input-task input");
    const taskList = document.querySelector(".general-task-list");
    const doneList = document.querySelector(".general-task-list-done");
    const searchInput = document.querySelector(".input-task-search input");
    const filterSelect = document.querySelector("#filter-select");

    let tasks = [];

    // Função para renderizar tarefas
    function renderTasks() {
        taskList.innerHTML = '<p class="text-task-list">Tasks to do</p>';
        doneList.innerHTML = '<p class="text-task-list">Done</p>';

        tasks.forEach((task, index) => {
            const taskElement = document.createElement("div");
            taskElement.classList.add("task-view");
            taskElement.innerHTML = `
                <p class="content-task">${task.text}</p>
                <div class="icons">
                    <img src="imgs/incon-check.svg" alt="icon-check" class="complete-btn" data-index="${index}">
                    <img src="imgs/icon-lixo.svg" alt="icon-lixo" class="delete-btn" data-index="${index}">
                </div>
            `;

            if (task.completed) {
                doneList.appendChild(taskElement);
            } else {
                taskList.appendChild(taskElement);
            }
        });
    }

    // Adicionar tarefa
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const text = taskInput.value.trim();
        if (text) {
            tasks.push({ text, completed: false });
            taskInput.value = "";
            renderTasks();
        }
    });

    // Delegação de eventos para completar ou deletar tarefa
    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("complete-btn")) {
            const index = event.target.dataset.index;
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        }
        if (event.target.classList.contains("delete-btn")) {
            const index = event.target.dataset.index;
            tasks.splice(index, 1);
            renderTasks();
        }
    });

    // Filtrar tarefas
    filterSelect.addEventListener("change", () => {
        const filter = filterSelect.value;
        const filteredTasks = tasks.filter(task => {
            if (filter === "all") return true;
            if (filter === "done") return task.completed;
            if (filter === "todo") return !task.completed;
        });
        taskList.innerHTML = '<p class="text-task-list">Tasks to do</p>';
        doneList.innerHTML = '<p class="text-task-list">Done</p>';
        filteredTasks.forEach((task, index) => {
            const taskElement = document.createElement("div");
            taskElement.classList.add("task-view");
            taskElement.innerHTML = `
                <p class="content-task">${task.text}</p>
                <div class="icons">
                    <img src="imgs/incon-check.svg" alt="icon-check" class="complete-btn" data-index="${index}">
                    <img src="imgs/icon-lixo.svg" alt="icon-lixo" class="delete-btn" data-index="${index}">
                </div>
            `;
            if (task.completed) {
                doneList.appendChild(taskElement);
            } else {
                taskList.appendChild(taskElement);
            }
        });
    });

    // Buscar tarefa
    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.toLowerCase();
        document.querySelectorAll(".task-view").forEach(task => {
            const taskText = task.querySelector(".content-task").textContent.toLowerCase();
            task.style.display = taskText.includes(searchText) ? "flex" : "none";
        });
    });
});





