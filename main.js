import { TaskManager, groupBy } from "./tasks.js";

const manager = new TaskManager();

const form = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");
const clearBtn = document.querySelector("#clear-all");

const allBtn = document.querySelector("#all-btn");
const pendingBtn = document.querySelector("#pending-btn");
const doneBtn = document.querySelector("#done-btn");

const sortSelect = document.querySelector("#sort");

const counter = document.querySelector("#counter");
const summaryBody = document.querySelector("#summary-body");

let currentFilter = "all";

function isOverdue(date) {
    const today = new Date().toISOString().split("T")[0];
    return date <= today;
}

function render() {

    let tasks = manager.filter(currentFilter);

    if (sortSelect.value === "priority") {
        tasks = manager.sortBy("priority").filter(task => {
            if (currentFilter === "all") return true;
            if (currentFilter === "done") return task.done;
            return !task.done;
        });
    }

    if (sortSelect.value === "dueDate") {
        tasks = manager.sortBy("dueDate").filter(task => {
            if (currentFilter === "all") return true;
            if (currentFilter === "done") return task.done;
            return !task.done;
        });
    }

    taskList.innerHTML = "";

    tasks.map(task => {

        const li = document.createElement("li");

        if (task.done)
            li.classList.add("done");

        if (isOverdue(task.dueDate))
            li.classList.add("overdue");

        li.innerHTML = `
            <strong>${task.name}</strong><br>
            Priority : ${task.priority}<br>
            Due : ${task.dueDate}
            <br><br>
            <button data-id="${task.id}">
                ${task.done ? "Undo" : "Done"}
            </button>
        `;

        li.querySelector("button").addEventListener("click", () => {
            manager.toggle(task.id);
            render();
        });

        taskList.appendChild(li);

    });

    counter.textContent =
        `Showing ${tasks.length} of ${manager.getAll().length} tasks`;

    summaryBody.innerHTML = "";

    manager.getAll().forEach(task => {

        summaryBody.innerHTML += `
        <tr>
            <td>${task.name}</td>
            <td>${task.priority}</td>
            <td>${task.dueDate}</td>
            <td>${task.done ? "Done" : "Pending"}</td>
        </tr>
        `;

    });

    console.log(groupBy(manager.getAll(), "priority"));

}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.querySelector("#task-name").value;

    const priority =
        document.querySelector("#priority").value;

    const dueDate =
        document.querySelector("#due-date").value;

    manager.add({
        name,
        priority,
        dueDate
    });

    form.reset();

    render();

});

clearBtn.addEventListener("click", () => {

    manager.clear();

    render();

});

allBtn.addEventListener("click", () => {

    currentFilter = "all";

    render();

});

pendingBtn.addEventListener("click", () => {

    currentFilter = "pending";

    render();

});

doneBtn.addEventListener("click", () => {

    currentFilter = "done";

    render();

});

sortSelect.addEventListener("change", render);

render();