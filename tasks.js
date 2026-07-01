export class TaskManager {
    tasks = [];
    constructor() {
        this.load();
    }
    add(data) {
        const task = {
            id: Date.now(),
            name: data.name,
            priority: data.priority,
            dueDate: data.dueDate,
            done: false
        };
        this.tasks.push(task);
        this.save();
        return task;
    }
    getAll() {
        return [...this.tasks];
    }
    toggle(id) {
        this.tasks = this.tasks.map(task => task.id === id
            ? { ...task, done: !task.done }
            : task);
        this.save();
    }
    clear() {
        this.tasks = [];
        this.save();
    }
    filter(status) {
        if (status === "done") {
            return this.tasks.filter(task => task.done);
        }
        if (status === "pending") {
            return this.tasks.filter(task => !task.done);
        }
        return [...this.tasks];
    }
    sortBy(field) {
        const priorityOrder = {
            High: 1,
            Medium: 2,
            Low: 3
        };
        return [...this.tasks].sort((a, b) => {
            if (field === "priority") {
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            }
            return a.dueDate.localeCompare(b.dueDate);
        });
    }
    save() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
    load() {
        const data = localStorage.getItem("tasks");
        if (data) {
            this.tasks = JSON.parse(data);
        }
    }
}
export function groupBy(array, key) {
    const result = {};
    array.forEach(item => {
        const value = String(item[key]);
        if (!result[value]) {
            result[value] = [];
        }
        result[value].push(item);
    });
    return result;
}
