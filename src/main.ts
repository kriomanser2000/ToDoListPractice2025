import {Task} from "./todo.js";

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

let tasks: Task[] =[];

addBtn.addEventListener("click", () => 
{
    const text = input.value.trim();
    if (!text) return;
    const newTask: Task = {id: Date.now(), text};
    tasks.push(newTask);
    renderTasks();
    input.value = "";
});

function renderTasks()
{
    list.innerHTML = "";
    tasks.forEach((t) => 
    {
        const li = document.createElement("li");
        li.innerHTML = `${t.text} <button data-id="${t.id}">X</button>`;
        list.appendChild(li);
    });
    document.querySelectorAll("button[data-id]").forEach((btn) =>
    {
        btn.addEventListener("click", () =>
        {
            const id = Number(btn.getAttribute("data-id"));
            tasks = tasks.filter((t) => t.id !== id);
            renderTasks();
        });
    });
}